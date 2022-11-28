import React from 'react';
import Lottie from "lottie-react";
import man from './man.json';

const ExtraSection = () => {
    return (
        <div className='mx-auto'>
            <Lottie className='lg:w-[1000px] text-center mx-auto p-4' animationData={man} loop={true} />
        </div>
    );
};

export default ExtraSection;
var a = true + true + true * 3;
console.log(a)