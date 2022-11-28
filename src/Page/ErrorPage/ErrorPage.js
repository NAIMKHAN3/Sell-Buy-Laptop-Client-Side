import React from 'react';
import { Link } from 'react-router-dom';
import image from '../ErrorPage/image/404-error-page-not-found.jpg'

const ErrorPage = () => {
    return (
        <div className='mt-10 mx-5'>
            <img className='w-[600px] mx-auto' src={image} alt="" />
            <h1 className='text-center text-3xl mt-5'>Please Go To <Link className='text-primary font-bold' to='/'>Home</Link></h1>
        </div>
    );
};

export default ErrorPage;