import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Share/UserContex/UserContext';
import CetegoryCard from '../CetegoryCard/CetegoryCard';

const Cetegory = () => {
    const [loading, setLoading] = useState(true)
    const [cetegorys, setCetegorys] = useState([]);

    useEffect(() => {
        axios.get('https://sell-buy-laptop-server-side.vercel.app/cetegorys')
            .then(res => {
                setCetegorys(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (!cetegorys.length) {

        return
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-orange-400 text-center mt-10'>Cetegories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto my-5'>
                {
                    cetegorys.map(cetegory => <CetegoryCard key={cetegory._id} cetegory={cetegory}></CetegoryCard>)
                }
            </div>
        </div>
    );
};

export default Cetegory;