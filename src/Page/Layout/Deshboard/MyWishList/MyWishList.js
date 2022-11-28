import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import BookingModal from '../../../BookingModal/BookingModal';
import { AuthContex } from '../../../Share/UserContex/UserContext';
import MyWishListCard from './MyWishListCard/MyWishListCard';

const MyWishList = () => {
    const { user, inputModal } = useContext(AuthContex);
    const [isLoading, setLoading] = useState(true)


    const { data: wishLists = [], refetch } = useQuery({
        queryKey: ['userwishlist'],
        queryFn: async () => {
            const res = await fetch(`https://sell-buy-laptop-server-side.vercel.app/userwishlist?email=${user.email}`, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            setLoading(false)
            return data
        }
    })


    if (isLoading || !user || !user?.uid) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (!wishLists.length) {
        refetch()
        return <h1 className=' text-center font-bold text-4xl text-orange-400 my-5'>Your WishList is Empty</h1>
    }


    return (
        <div>
            <h1 className=' text-center font-bold text-4xl text-orange-400 my-5'>My WishList</h1>

            <div className=''>
                {
                    wishLists.map(wishList => <MyWishListCard key={wishList._id} wishList={wishList}></MyWishListCard>)
                }
            </div>

            {
                inputModal &&
                <BookingModal></BookingModal>
            }
        </div>
    );
};

export default MyWishList;