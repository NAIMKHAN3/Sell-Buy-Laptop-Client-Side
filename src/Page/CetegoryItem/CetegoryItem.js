import React, { useContext, } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import { AuthContex } from '../Share/UserContex/UserContext';
import CetegoryItemCard from './CetegoryItemCard/CetegoryItemCard';

const CetegoryItem = () => {
    const products = useLoaderData();
    const { inputModal, } = useContext(AuthContex);
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }



    if (!products.length) {
        return <h1 className='text-orange-400 text-4xl font-bold text-center my-5'>Product Not Available</h1>
    }



    return (
        <div className='my-5'>
            <h1 className='text-orange-400 text-4xl font-bold text-center'>Cetegory Item Of {products[0]?.brand} Brand</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-5'>
                {
                    products.map(product => <CetegoryItemCard key={product._id} product={product}></CetegoryItemCard>)
                }
            </div>
            {
                inputModal &&
                <BookingModal
                ></BookingModal>
            }
        </div>
    );
};

export default CetegoryItem;