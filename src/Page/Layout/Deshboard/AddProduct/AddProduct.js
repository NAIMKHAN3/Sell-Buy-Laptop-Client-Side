import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../../../Share/UserContex/UserContext';

const AddProduct = () => {
    const { user, cetegorys } = useContext(AuthContex)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = () => {

    }
    if (!cetegorys) {
        return
    }
    return (
        <div className='md:w-2/3 sm:w-full mx-auto my-10 shadow-lg p-10'>
            <h1 className='text-center text-4xl font-bold text-orange-400'>Add Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='flex mt-10'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select {...register("brand")} className="select select-bordered w-full">
                            {
                                cetegorys.map(cetegory => <option key={cetegory._id}>{cetegory.name}</option>)
                            }
                        </select>
                        {errors.brand && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select {...register("location")} className="select select-bordered w-full">
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Cumilla</option>
                            <option>Faridhpur</option>
                            <option>Khulna</option>
                            <option>Rajshahi</option>
                            <option>Barisal</option>
                            <option>Sylet</option>
                            <option>Mymensing</option>

                        </select>
                        {errors.location && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("resale", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.resale && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("original", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.original && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">Use Time</span>
                        </label>
                        <input {...register("use", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.use && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input {...register("sellername", { required: true })} type="text" defaultValue={user.displayName} readOnly className="input input-bordered w-full " />
                        {errors.sellername && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register("image", { required: true })} type="text" className="input input-bordered w-full " />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </div>

                <input className='btn bg-orange-400 w-full my-5 border-none font-bold' type="submit" />
            </form>

        </div>

    );
};

export default AddProduct;