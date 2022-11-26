import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContex } from '../Share/UserContex/UserContext';

const BookingModal = ({ inputModal, setInputModal }) => {
    const { user } = useContext(AuthContex)
    const { model, resale, brand } = inputModal;
    const handleModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form.number.value;
        const meetingLocation = form.meetinglocation.value;
        const username = user.displayName;
        const useremail = user.email;
        const booking = {
            username, useremail, brand, model, price: resale, number, meetingLocation,
        }
        console.log(booking)
        setInputModal(null)
        toast.success('Product Successfully Booked')
    }
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
                            <input name='name' type="text" disabled defaultValue={user?.displayName} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input name='email' type="text" disabled defaultValue={user?.email} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input name='model' type="text" disabled defaultValue={model} className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" disabled defaultValue={resale} className="input input-bordered" />
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