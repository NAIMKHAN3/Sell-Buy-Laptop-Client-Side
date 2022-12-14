import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyBookingCard = ({ myBooking, refetch }) => {
    const { image, brand, model, selleremail, price, productId, _id } = myBooking;
    const [productStatus, setProductStatus] = useState('')

    useEffect(() => {
        axios.get(`https://sell-buy-laptop-server-side.vercel.app/productstatus?id=${productId}`)
            .then(res => {
                setProductStatus(res.data?.status)

            })
    }, [productId])

    const handleBooking = () => {
        const procced = window.confirm('Are you sure Cancel booking?')
        if (procced) {
            fetch(`https://sell-buy-laptop-server-side.vercel.app/deletebooking?id=${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        refetch()
                        toast.success('Booking deleted successfully');
                    }

                })
                .catch(e => console.log(e))
        }


    }
    console.log(productStatus)
    return (

        <div className="card border border-orange-300 p-3">
            {
                productStatus === 'true' && <p className='pl-3 pt-3 text-green-600 font-bold'>Available</p>
            }
            {
                productStatus === 'false' && <p className='pl-3 pt-3 text-red-600 font-bold'>Sold Out</p>
            }
            {
                !productStatus && <p className='pl-3 pt-3 text-red-600 font-bold'>Sold Out</p>
            }
            <div>
                <figure><img src={image} alt="Shoes" className='lg:h-48 lg:w-full' /></figure>
                <div className="p-2 text-center">
                    <h2 className=" text-center font-bold">{brand} {model}</h2>
                    <h2 className=" text-centerfont-bold">Price: {price}</h2>

                    <p>S.U Email: <span className='font-bold'>{selleremail}</span></p>
                    <div className="card-actions">
                        <button onClick={handleBooking} className="btn bg-red-500 w-full mt-3 border-none">Booking Cancel</button>
                        <Link to={`/deshboard/payment/${_id}`} className="w-full"><button className="btn bg-green-500 w-full border-none  mt-3">Pay Product</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;