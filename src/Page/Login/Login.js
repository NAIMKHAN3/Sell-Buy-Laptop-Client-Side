import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Share/UserContex/UserContext';

const Login = () => {
    const { logIn, signInGoogle } = useContext(AuthContex);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSignUp = data => {
        const { email, password } = data;
        logIn(email, password)
            .then(result => {
                fetch(`https://sell-buy-laptop-server-side.vercel.app/jwt?email=${result.user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        const token = data.token;

                        localStorage.setItem('token', token)

                    })
                    .catch(e => {

                        console.log(e)
                    })
                toast.success('Log In Success')
                Navigate(from, { replace: true })
            })
            .catch(e => {
                toast.error(e.message)
                console.log(e)
            })
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                console.log(result)
                const userEmail = result.user.email;
                const email = result.user.email;
                const name = result.user.displayName;
                const user = {
                    name,
                    email,
                    role: "buyer",
                    verified: "false"


                }
                fetch('https://sell-buy-laptop-server-side.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        fetch(`https://sell-buy-laptop-server-side.vercel.app/jwt?email=${userEmail}`)
                            .then(res => res.json())
                            .then(data => {
                                const token = data.token;
                                localStorage.setItem('token', token)
                            })
                            .catch(e => console.log(e))
                        // navigate(from, { replace: true })
                        toast.success('Log In Success')
                        Navigate(from, { replace: true })
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    }
    return (
        <div className='lg:w-1/3 mx-auto my-20 shadow-lg p-10 border-2 border-indigo-200'>
            <h1 className='text-center text-4xl font-bold text-indigo-500'>Log In</h1>
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
                <input className='btn bg-indigo-600 w-full my-5 border-none font-bold' type="submit" />
            </form>
            <p className='text-center'>New To Sell-Buy-Laptop Please <Link to='/signup' className='text-primary'>Sign Up</Link></p>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className="btn btn-outline btn-info w-full">Sign in Google</button>
            </div>
        </div>
    );
};

export default Login;