import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContex } from '../../../Share/UserContex/UserContext';
import MyWishListCard from './MyWishListCard/MyWishListCard';

const MyWishList = () => {
    const { user } = useContext(AuthContex);
    const [isLoading, setLoading] = useState(true)


    const { data: wishLists = [], refetch } = useQuery({
        queryKey: ['mywishlish'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userwishlist?email=${user.email}`)
            const data = await res.json()
            setLoading(false)
            return data
        }
    })
    console.log(wishLists)

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
        </div>
    );
};

export default MyWishList;