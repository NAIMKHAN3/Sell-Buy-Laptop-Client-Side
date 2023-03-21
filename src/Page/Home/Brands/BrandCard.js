import React from 'react';

const BrandCard = ({ brand }) => {
    const { details, img } = brand;
    return (
        <div className=' m-2 p-3 shadow-xl text-slate-500 hover:bg-indigo-400 duration-700 transition hover:text-white rounded-lg'>
            <img className='w-24 h-24 m-auto' src={img} alt="" />
            <p>{details}</p>
        </div>
    );
};

export default BrandCard;