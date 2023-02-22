import React from 'react';

const BrandCard = ({ brand }) => {
    const { name, details, img } = brand;
    return (
        <div className='border-2 border-indigo-700 bg-indigo-200 m-2 p-3'>
            <img className='w-24 h-24 m-auto' src={img} alt="" />
            {/* <h1 className='text-3xl font-bold text-indigo-700 text-center'>{name}</h1> */}
            <p>{details}</p>
        </div>
    );
};

export default BrandCard;