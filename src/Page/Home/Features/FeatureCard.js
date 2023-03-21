import React from 'react';

const FeatureCard = ({ feature, icon }) => {
    console.log(feature)
    return (
        <div className=' m-2 p-2 shadow-xl rounded-lg'>
            <h1 className='text-5xl text-indigo-400'>{icon}</h1>
            <h1 className='text-3xl font-bold text-indigo-500 text-center'>{feature.name}</h1>
            <p className='p-3 text-slate-500'>{feature.details}</p>
        </div>
    );
};

export default FeatureCard;