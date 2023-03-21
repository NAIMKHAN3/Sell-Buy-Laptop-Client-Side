import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContex } from '../Share/UserContex/UserContext';

const BookingModal = () => {
    const { user, inputModal, setInputModal } = useContext(AuthContex)
    const { model, resale, brand, _id, image, selleremail } = inputModal;

    const handleModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form.number.value;
        const meetingLocation = form.meetinglocation.value;
        const username = user.displayName;
        const useremail = user.email;
        const booking = {
            username, useremail, brand, model, image, selleremail, price: resale, number, meetingLocation, productId: _id,
        }

        fetch('https://sell-buy-laptop-server-side.vercel.app/addmybooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setInputModal(null)
                    toast.success('Product Successfully Booked')
                }
                else {
                    toast.error(data.message)
                }
                setInputModal(null)
            })
            .catch(e => console.log(e))
    }

    // if (isLoading) {
    //     return <div className="text-center">
    //         <div class="flex justify-center items-center mt-10">
    //             <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    //                 <span class="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     </div>
    // }
    return (
        <div>
            <input type="checkbox" id="sell-laptop-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="sell-laptop-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking {model} Of {brand} Brand</h3>
                    <form onSubmit={handleModal}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='name' type="text" disabled value={user?.displayName} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input name='email' type="text" disabled value={user?.email} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input name='model' type="text" disabled value={model} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" disabled value={resale} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='number' type="number" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input name='meetinglocation' type="Text" className="input input-bordered" required />
                            <button type='submit' className='btn my-5 btn-primary btn-sm'>Submit</button>

                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default BookingModal;