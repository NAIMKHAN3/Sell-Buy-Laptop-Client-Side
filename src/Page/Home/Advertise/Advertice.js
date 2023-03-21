import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import CetegoryItemCard from '../../CetegoryItem/CetegoryItemCard/CetegoryItemCard';
import { AuthContex } from '../../Share/UserContex/UserContext';
import add from './add.json';
import Lottie from "lottie-react";



const Advertice = () => {
    const { inputModal } = useContext(AuthContex);

    const { data: advertice = [] } = useQuery({
        queryKey: ['adverticeproduct'],
        queryFn: async () => {
            const res = await fetch('https://sell-buy-laptop-server-side.vercel.app/adverticeproduct')
            const data = await res.json()
            return data
        }
    })
    if (!advertice.length) {
        return
    }
    return (
        <section>
            <div className='flex justify-center'>
                <Lottie className='w-[100px] text-center p-4' animationData={add} loop={true} />
                <h1 className='text-4xl font-bold text-center my-5 text-slate-500'>Advertice Product</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 my-5 px-10'>
                {
                    advertice.map(product => <CetegoryItemCard key={product._id} product={product}></CetegoryItemCard>)
                }
            </div>
            {
                inputModal &&
                <BookingModal
                ></BookingModal>
            }
        </section>
    );
};

export default Advertice;