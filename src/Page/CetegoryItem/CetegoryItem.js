import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CetegoryItemCard from './CetegoryItemCard/CetegoryItemCard';

const CetegoryItem = () => {
    const products = useLoaderData();
    console.log(products)


    return (
        <div className='my-5'>
            <h1 className='text-orange-400 text-4xl font-bold text-center'>Cetegory Item Of {products[0]?.brand} Brand</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-5'>
                {
                    products.map(product => <CetegoryItemCard key={product._id} product={product}></CetegoryItemCard>)
                }
            </div>
        </div>
    );
};

export default CetegoryItem;