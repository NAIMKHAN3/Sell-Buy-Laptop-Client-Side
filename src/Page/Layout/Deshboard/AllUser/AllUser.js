import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const { data: allUsers = [] } = useQuery({
        queryKey: ['alluser'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/alluser')
            const data = await res.json()
            return data
        }
    })
    console.log(allUsers)


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
                        allUsers.map((allUser, i) => <tr key={allUser._id}>
                            <th>{i + 1}</th>
                            <td>{allUser.name}</td>
                            <td>{allUser.email}</td>
                            <td>{allUser.role}</td>
                            <td><button className='btn btn-primary btn-sm'>Make Admin</button></td>
                            <td><button className='btn btn-primary btn-sm'>Delete</button></td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;