import React from 'react';
import Lottie from "lottie-react";
import lottie from './lottie.json'

const Header = () => {
    return (
        <div className='lg:w-2/3 mx-auto my-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2  my-10 border border-orange-400'>
                <Lottie className='lg:w-[400px] p-4' animationData={lottie} loop={true} />
                <div className=' flex justify-center items-center flex-col p-4'>
                    <p className='text-3xl font-bold text-blue-500 '>Buy Laptops with confidence  on the Sell Buy Laptop website</p>
                    <h1 className='text-xl'>You can buy the laptop   of your choice on our website.  And you can open seller account  and sell your laptop if you want.</h1>
                </div>
            </div>


        </div>
    );
};

export default Header;