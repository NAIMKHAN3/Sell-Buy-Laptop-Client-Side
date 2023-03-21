import React from 'react';
import { Link } from 'react-router-dom';

const CetegoryCard = ({ cetegory, brand }) => {
    return (
        <Link to={`/cetegoryitem/${cetegory._id}`}><div className=" m-3 p-3 transition duration-700 hover:bg-indigo-200 rounded-lg shadow-lg">
            {/* <h1 className='text-center font-bold text-2xl text-indigo-500'>{cetegory.name}</h1> */}
            <img className='w-[100px] rounded-full h-[100px] mx-auto' src={brand.img} alt="" />
        </div></Link>

    );
};

export default CetegoryCard;