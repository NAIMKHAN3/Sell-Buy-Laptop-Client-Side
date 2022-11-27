import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../../Share/UserContex/UserContext';

const MyWishListCard = ({ wishList }) => {
    const { user, setInputModal } = useContext(AuthContex)
    const { image, model, location, resale, original, date, productId, sellername, selleremail, use, _id } = wishList;
    const [verify, setVerify] = useState('')
    const [productStatus, setProductStatus] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:5000/userverified?email=${selleremail}`)
            .then(res => {
                setVerify(res.data?.verified)

            })
    }, [selleremail])


    useEffect(() => {
        axios.get(`http://localhost:5000/productstatus?id=${productId}`)
            .then(res => {
                setProductStatus(res.data?.status)

            })
    }, [productId])
    return (
        <div className='bg-base-200 lg:w-2/3 mx-auto'>
            {
                productStatus === 'true' && <p className='pl-3 pt-3 text-green-600 font-bold'>Available</p>
            }
            {
                productStatus === 'false' && <p className='pl-3 pt-3 text-red-600 font-bold'>Sold Out</p>
            }
            {
                !productStatus && <p className='pl-3 pt-3 text-red-600 font-bold'>Sold Out</p>
            }

            <div className="hero-content flex-col lg:flex-row  mb-5">
                <img src={image} alt='' className=" h-48 md:h-full w-48 rounded-lg" />
                <div className='w-full'>
                    <div className='flex flex-row lg:justify-between '>
                        <div>
                            <h1 className='mt-2 font-bold'>Name: {model}</h1>
                            <p className='mt-2 font-bold'>Resale Price: {resale}</p>
                            <p className='mt-2 font-bold'>Use Time: {use}</p>
                            <p className='mt-2 font-bold'>Seller Name: {sellername}</p>
                        </div>
                        <div>
                            <p className='mt-2 font-bold'>Location: {location}</p>
                            <p className='mt-2 font-bold'>Original Price: {original}</p>
                            <p className='mt-2 font-bold'>Date: {date}</p>
                            {
                                verify === 'false' && <p className='font-bold'>Seller Verify: <span className='text-red-500'>Unverified</span></p>
                            }
                            {
                                verify === 'true' && <p className='font-bold'>Seller Verify: <span className='text-green-500'>Verified <FaCheck className='inline'></FaCheck></span></p>
                            }
                        </div>
                    </div>
                    <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3 px-0'>
                        <label onClick={() => setInputModal(wishList)} htmlFor="sell-laptop-3" className="btn btn-sm btn-primary">Booking Now</label>
                        <button className="btn btn-sm bg-red-600 ">Report To Admin</button>
                        {/* <Link to={`/deshboard/payment/${_id}`}>  <button className="btn btn-sm bg-green-600 ">Pay product</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWishListCard;