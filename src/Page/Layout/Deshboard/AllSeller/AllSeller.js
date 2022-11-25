import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const { data: allSellers = [] } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allseller')
            const data = await res.json()
            return data
        }
    })
    console.log(allSellers)

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSellers.map((allSellers, i) => <tr key={allSellers._id}>
                            <th>{i + 1}</th>
                            <td>{allSellers.name}</td>
                            <td>{allSellers.email}</td>
                            <td>{allSellers.role}</td>
                            <td><button className='btn btn-primary btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-primary btn-sm'>Delete</button></td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;