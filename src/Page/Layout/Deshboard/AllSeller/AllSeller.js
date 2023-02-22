import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const AllSeller = () => {
    const [loading, setLoading] = useState(true)

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('https://sell-buy-laptop-server-side.vercel.app/allseller', { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            setLoading(false)
            return data
        }
    })
    const handleVarify = id => {
        setLoading(true)
        const procced = window.confirm('Are You Sure Verify User?');
        if (procced) {
            fetch(`https://sell-buy-laptop-server-side.vercel.app/verifyuser?id=${id}`, {
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
                        setLoading(false)
                    }
                })

                .catch(e => console.log(e))
        }

    }
    const handleMakeAdmin = id => {
        setLoading(true)
        const procced = window.confirm('Are You Sure Promotion User by Admin?')
        if (procced) {
            fetch(`https://sell-buy-laptop-server-side.vercel.app/makeadmin?id=${id}`, {
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
                        setLoading(false)
                    }
                })

                .catch(e => console.log(e))
        }

    }

    if (!allSellers.length) {
        return <h1 className='my-5 text-center font-bold text-4xl text-indigo-500'>Seller is Empty</h1>
    }


    if (loading) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }



    const hanldleDeleteUser = (id) => {
        const procced = window.confirm('Are You Sure Deleted User?')
        if (procced) {
            setLoading(true)
            fetch(`https://sell-buy-laptop-server-side.vercel.app/deleteuser?id=${id}`, {
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
                        setLoading(false)
                    }
                })

                .catch(e => console.log(e))
        }

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
                        allSellers.map((allSeller, i) => <tr key={allSeller._id}>
                            <th>{i + 1}</th>
                            <td>{allSeller.name}</td>
                            <td>{allSeller.email}</td>
                            <td>{allSeller.role}</td>
                            <td>
                                {
                                    allSeller.role === 'admin' && <p className='text-green-500'>Admin User</p>
                                }
                                {
                                    allSeller.role !== 'admin' && <button onClick={() => handleMakeAdmin(allSeller._id)} className='btn btn-primary btn-sm'>Make Admin</button>
                                }
                            </td>
                            <td><button onClick={() => hanldleDeleteUser(allSeller._id)} className='btn btn-primary btn-sm'>Delete</button></td>
                            <td>
                                {
                                    allSeller.verified === "false" && <button onClick={() => handleVarify(allSeller._id)} className='btn btn-primary btn-sm'>verify User</button>
                                }
                                {
                                    allSeller.verified === "true" && <span className='text-green-500'>Verified <FaCheck className='inline'></FaCheck></span>
                                }

                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;