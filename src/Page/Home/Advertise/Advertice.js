import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import CetegoryItemCard from '../../CetegoryItem/CetegoryItemCard/CetegoryItemCard';
import { AuthContex } from '../../Share/UserContex/UserContext';



const Advertice = () => {
    const { inputModal } = useContext(AuthContex);

    const { data: advertice = [] } = useQuery({
        queryKey: ['adverticeproduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/adverticeproduct')
            const data = await res.json()
            return data
        }
    })
    if (!advertice.length) {
        return
    }
    return (
        <section>
            <h1 className='text-4xl text-orange-400 font-bold text-center my-5'>Advertice Product</h1>
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