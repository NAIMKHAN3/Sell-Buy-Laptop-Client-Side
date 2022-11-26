import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../../Share/UserContex/UserContext';
import MyProductCard from './MyProductCard/MyProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContex);
    const [products, setProducts] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/userproduct?email=${user?.email}`)
            .then(res => {
                setProducts(res.data)

            })
    }, [user.email, refetch])

    if (!products.length) {
        return <h1 className='my-5 text-center font-bold text-4xl text-orange-400'>Your Product is Empty</h1>
    }


    return (
        <div>
            <h1 className='my-5 text-center font-bold text-4xl text-orange-400'>My Product List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.map(product => <MyProductCard key={product._id} product={product} setRefetch={setRefetch} refetch={refetch}></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProduct;