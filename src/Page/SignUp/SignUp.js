import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data)
    }

    return (
        <div className='w-1/3 mx-auto my-10 shadow-lg p-10'>
            <h1 className='text-center text-4xl font-bold text-orange-400'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className='flex mt-10'>
                    <div className="form-control w-full mr-3">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input {...register("firstname", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.firstname && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input {...register("lastname", { required: true })} type="text" className="input input-bordered w-full " />
                        {errors.lastname && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" className="input input-bordered w-full " />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { required: true })} type="password" className="input input-bordered w-full " />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </div>
                <select {...register("role")} className="select select-bordered w-full my-5">
                    <option defaultValue>buyer</option>
                    <option className='py-4'>seller</option>
                </select>
                <input className='btn bg-orange-400 w-full my-5 border-none font-bold' type="submit" />
            </form>
            <p className='text-center'>Already Have An Account Please <Link to='/login' className='text-primary'>Log In</Link></p>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-info w-full">Sign in Google</button>
            </div>
        </div>
    );
};

export default SignUp;