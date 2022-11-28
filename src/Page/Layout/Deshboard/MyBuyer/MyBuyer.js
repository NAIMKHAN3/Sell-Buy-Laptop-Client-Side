import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContex } from '../../../Share/UserContex/UserContext';

const MyBuyer = () => {
    const { user } = useContext(AuthContex);

    const { data: myBuyers = [], } = useQuery({
        queryKey: ['mybuyer'],
        queryFn: async () => {
            const res = await fetch(`https://sell-buy-laptop-server-side.vercel.app/mybuyer?email=${user?.email}`, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            return data
        }
    })

    if (!myBuyers.length) {
        return <h1 className='my-5 text-center font-bold text-4xl text-orange-400'>Your buyer is Empty</h1>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Location</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myBuyers.map((myBuyer, i) => <tr key={myBuyer._id}>
                            <th>{i + 1}</th>
                            <td>{myBuyer.name}</td>
                            <td>{myBuyer.email}</td>
                            <td>{myBuyer.number}</td>
                            <td>{myBuyer.location}</td>
                            <td>{myBuyer.price}</td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyBuyer;