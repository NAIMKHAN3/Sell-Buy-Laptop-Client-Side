import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const queryClient = useQueryClient()

    const { data: allbuyers = [] } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyer')
            const data = await res.json()
            return data
        }
    })
    console.log(allbuyers)


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
                        allbuyers.map((allbuyer, i) => <tr key={allbuyer._id}>
                            <th>{i + 1}</th>
                            <td>{allbuyer.name}</td>
                            <td>{allbuyer.email}</td>
                            <td>{allbuyer.role}</td>
                            <td><button className='btn btn-primary btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-primary btn-sm'>Delete</button></td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllBuyer;