import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CetegoryItemCard from './CetegoryItemCard/CetegoryItemCard';

const CetegoryItem = () => {
    const products = useLoaderData();
    const [inputModal, setInputModal] = useState();


    return (
        <div className='my-5'>
            <h1 className='text-orange-400 text-4xl font-bold text-center'>Cetegory Item Of {products[0]?.brand} Brand</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-5'>
                {
                    products.map(product => <CetegoryItemCard key={product._id} product={product} setInputModal={setInputModal}></CetegoryItemCard>)
                }
            </div>
            {
                inputModal &&
                <BookingModal
                    inputModal={inputModal}
                    setInputModal={setInputModal}
                ></BookingModal>
            }
        </div>
    );
};

export default CetegoryItem;