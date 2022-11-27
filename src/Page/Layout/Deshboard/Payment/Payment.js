import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut/CheckOut';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();


    console.log(data)

    return (
        <div className='my-10'>
            <h1 className='text-2xl text-orange-400 text-center'>Payment Of {data.brand} {data.model} <span className='font-bold'>{data.price}</span> Taka Only.</h1>
            <div className='lg:w-2/3 mx-auto my-10 border border-orange-400 p-5'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        data={data}
                    ></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;