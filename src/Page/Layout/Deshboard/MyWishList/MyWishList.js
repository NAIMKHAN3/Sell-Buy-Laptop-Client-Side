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
            const res = await fetch(`http://localhost:5000/userwishlist?email=${user.email}`, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            setLoading(false)
            return data
        }
    })


    if (isLoading || !user || !user?.uid) {
        return <h1>Loaddin .....</h1>
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