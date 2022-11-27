import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const AllUser = () => {
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['alluser'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/alluser', { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            return data
        }
    })

    const handleVarify = id => {
        fetch(`http://localhost:5000/verifyuser?id=${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success('User Verified Success')
                }
            })

            .catch(e => console.log(e))
    }

    const handleMakeAdmin = id => {
        const procced = window.confirm('Are You Sure Promotion User by Admin?')
        if (procced) {
            fetch(`http://localhost:5000/makeadmin?id=${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        toast.success('User Promoted by Admin')
                    }
                })
                .catch(e => console.log(e))
        }
    }
    const hanldleDeleteUser = (id) => {
        const procced = window.confirm('Are You Sure Deleted User?')
        if (procced) {
            fetch(`http://localhost:5000/deleteuser?id=${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        toast.success('User Deleted Success')
                    }
                })

                .catch(e => console.log(e))
        }

    }

    if (!allUsers.length) {
        return <h1 className='my-5 text-center font-bold text-4xl text-orange-400'>User is Empty</h1>
    }


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
                        <th>Verify Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((allUser, i) => <tr key={allUser._id}>
                            <th>{i + 1}</th>
                            <td>{allUser.name}</td>
                            <td>{allUser.email}</td>
                            <td>{allUser.role}</td>
                            <td>
                                {
                                    allUser.role === 'admin' && <p className='text-green-500'>Admin User</p>
                                }
                                {
                                    allUser.role !== 'admin' && <button onClick={() => handleMakeAdmin(allUser._id)} className='btn btn-primary btn-sm'>Make Admin</button>
                                }
                            </td>
                            <td><button onClick={() => hanldleDeleteUser(allUser._id)} className='btn btn-primary btn-sm'>Delete</button></td>
                            <td>
                                {
                                    allUser.verified === "false" && <button onClick={() => handleVarify(allUser._id)} className='btn btn-primary btn-sm'>verify User</button>
                                }
                                {
                                    allUser.verified === "true" && <span className='text-green-500'>Verified <FaCheck className='inline'></FaCheck></span>
                                }
                            </td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;