import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data)
    }
    return (
        <div className='w-1/3 mx-auto my-20 shadow-lg p-10'>
            <h1 className='text-center text-4xl font-bold text-blue-500'>Log In</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
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
                <input className='btn bg-blue-500 w-full my-5 border-none font-bold' type="submit" />
            </form>
            <p className='text-center'>New To Sell-Buy-Laptop Please <Link to='/signup' className='text-primary'>Sign Up</Link></p>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-info w-full">Sign in Google</button>
            </div>
        </div>
    );
};

export default Login;