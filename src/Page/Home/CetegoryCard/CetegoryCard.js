import React from 'react';
import { Link } from 'react-router-dom';

const CetegoryCard = ({ cetegory }) => {
    return (
        <Link to={`/cetegoryitem/${cetegory._id}`}><div className="bg-base-100 border border-indigo-200 m-3 p-3">
            <h1 className='text-center font-bold text-2xl text-indigo-500'>{cetegory.name}</h1>
        </div></Link>

    );
};

export default CetegoryCard;