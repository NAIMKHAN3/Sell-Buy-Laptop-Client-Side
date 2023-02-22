import React from 'react';

const FeatureCard = ({ feature }) => {
    console.log(feature)
    return (
        <div className='border-2 border-indigo-700 m-2 p-2 bg-indigo-200'>
            <h1 className='text-3xl font-bold text-indigo-700 text-center'>{feature.name}</h1>
            <p className='p-3'>{feature.details}</p>
        </div>
    );
};

export default FeatureCard;