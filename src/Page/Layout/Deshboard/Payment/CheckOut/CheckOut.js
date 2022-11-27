import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckOut = ({ data }) => {



  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [succeeded, setSucceeded] = useState('')
  const [tranzaction, setTranzaction] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const { price, username, useremail, _id } = data

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
      .catch(e => console.log(e));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setCardError(error.message)
    }
    else {
      setCardError('')
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: username,
            email: useremail
          },
        },
      },
    );
    if (confirmError) {
      setCardError(confirmError.message)
    }
    if (paymentIntent?.status === "succeeded") {
      const payment = {
        price,
        bookingId: _id,
        transactionId: paymentIntent.id,
        useremail,
      }
      fetch('http://localhost:5000/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setSucceeded('congrats! your paymant is succeeded')
          setTranzaction(paymentIntent.id)
        })
        .catch(e => console.log(e))

    }
  };
  if (!stripe || !clientSecret) {
    return;
  }






  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='text-3xl text-center text-primary font-bold my-5'>Payment Form</h1>
        <div>
          <div className='flex'>
            <div className='lg:w-1/2 m-2'>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input defaultValue={username} readOnly type="text" className="input input-bordered w-full " />
            </div>
            <div className='lg:w-1/2 m-2'>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input defaultValue={useremail} readOnly type="text" className="input input-bordered  w-full" />
            </div>
          </div>

          <div className='flex'>

            <div className='lg:w-1/2 m-2'>
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input type="text" className="input input-bordered  w-full" required />
            </div>
            <div className='lg:w-1/2 m-2'>
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input type="text" className="input input-bordered  w-full" required />
            </div>
          </div>

        </div>
        <label className="label">
          <span className="label-text">Card Details</span>
        </label>
        <CardElement className='input input-bordered  p-3'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <div className='lg:w-1/3 mx-auto'>
          <button
            className='btn w-full btn-sm mt-4 btn-primary'
            type="submit"
            disabled={!stripe}>
            Payment
          </button>
        </div>
      </form>
      {
        cardError && <p className='text-red-700'>{cardError}</p>
      }
      {
        succeeded && <div>
          <p className='text-green-600'>Success : {succeeded}</p>
          <p>Note: Your tranxiction ID: {tranzaction}</p>
        </div>
      }

    </div>
  );
};

export default CheckOut;