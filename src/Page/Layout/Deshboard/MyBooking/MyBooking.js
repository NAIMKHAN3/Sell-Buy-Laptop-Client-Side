import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContex } from '../../../Share/UserContex/UserContext';
import MyBookingCard from './MyBookingCard/MyBookingCard';

const MyBooking = () => {
    const { user } = useContext(AuthContex)
    const { data: myBookings = [], refetch } = useQuery({
        queryKey: ['mybooking'],
        queryFn: async () => {
            const res = await fetch(`https://sell-buy-laptop-server-side.vercel.app/mybooking?email=${user?.email}`, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            return data
        }
    })


    if (!myBookings.length) {
        // refetch()
        return <h1 className=' text-center font-bold text-4xl text-indigo-500 my-5'>Your Booking Empty</h1>
    }

    return (
        <div>
            <h1 className='my-5 text-center font-bold text-4xl text-indigo-500'>My Booking Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                {
                    myBookings.map(myBooking => <MyBookingCard key={myBooking._id} myBooking={myBooking} refetch={refetch}></MyBookingCard>)
                }
            </div>
        </div>
    );
};

export default MyBooking;