import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const AllSeller = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allseller', { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
            const data = await res.json()
            return data
        }
    })
    const handleVarify = id => {
        const procced = window.confirm('Are You Sure Verify User?')
        if (procced) {
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

    if (!allSellers.length) {
        return <h1 className='my-5 text-center font-bold text-4xl text-orange-400'>Seller is Empty</h1>
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