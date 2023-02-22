import React from 'react';

const Contact = () => {
    return (
        <div className='bg-indigo-200 my-5 p-4'>
            <h1 className='text-center text-indigo-700 text-4xl font-bold my-3'>Contact Us</h1>
            <p className='text-center text-2xl font-bold my-3'>Stay Connected With Us</p>
            <div className='md:w-1/3 mx-auto'>
                <input type="text" placeholder='Email Address' className="input input-bordered w-full my-1 " />
                <input type="text" placeholder='Subject' className="input input-bordered w-full my-1" />
                <textarea className="textarea input input-bordered w-full my-1 " placeholder="Your Message"></textarea>
                <input className='btn bg-indigo-500 w-full my-5 border-none font-bold' type="submit" />
            </div>
        </div>
    );
};

export default Contact;