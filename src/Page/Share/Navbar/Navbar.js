import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import laptop from '../Navbar/image/icon.jpg'
import { AuthContex } from '../UserContex/UserContext';
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaRegEdit, FaUsersCog, FaNewspaper } from 'react-icons/fa';

const Navbar = () => {

    const { user, cetegorys, logOut } = useContext(AuthContex);

    if (!cetegorys) {
        return
    }
    const signOut = () => {
        logOut()
            .then(result => {
                toast.success('Log Out Success')
            })
    }



    const item = <>
        <div className='flex justify-start lg:justify-center  items-center hover:bg-indigo-400'>
            <FaHome className='mx-2'></FaHome>
            <Link className='mr-5 font-bold text-xl' to='/home'>Home</Link>
        </div>
        <div className="dropdown hidden lg:block dropdown-hover">
            <div className='flex justify-start lg:justify-center items-center hover:bg-indigo-400'>
                <FaNewspaper className='mx-2'></FaNewspaper>
                <label tabIndex={0} className="mr-5 cursor-pointer font-bold text-xl">Cetegories</label>
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black">
                {
                    cetegorys.map(cetegory => <li key={cetegory._id}><Link to={`/cetegoryitem/${cetegory._id}`} className="hover:bg-indigo-400">{cetegory.name}</Link></li>)
                }
            </ul>
        </div>
        <div className='flex justify-start lg:justify-center items-center hover:bg-indigo-400'>
            <FaUsersCog className='mx-2'></FaUsersCog>
            <Link className='mr-5 font-bold text-xl' to='/deshboard'>Deshboard</Link>
        </div>
        <div className='flex justify-start lg:justify-center items-center hover:bg-indigo-400'>
            <FaRegEdit className='mx-2'></FaRegEdit>
            <Link to='/blog' className='mr-5 font-bold text-xl'>Blog</Link>
        </div>

        {
            user?.uid ? <>
                {/* <Link className='mr-5 font-bold text-xl' to='/deshboard'>Deshboard</Link>
                <Link to='/blog' className='mr-5 font-bold text-xl' >Blog</Link> */}
                <div className='flex justify-start lg:justify-center items-center'>
                    <FaSignOutAlt className='mx-2'></FaSignOutAlt>
                    <button onClick={signOut} className='mr-5 font-bold text-xl hover:bg-indigo-400'>Log Out</button>
                </div>
            </> : <>

                {/* <Link to='/blog' className='mr-5 font-bold text-xl' >Blog</Link> */}
                <div className='flex justify-start lg:justify-center items-center hover:bg-indigo-400'>
                    <FaSignInAlt className='mx-2'></FaSignInAlt>
                    <Link className='mr-5 font-bold text-xl' to='/login'>Log In</Link>
                </div>
                <div className='flex justify-start lg:justify-center items-center hover:bg-indigo-400'>
                    <FaUserPlus className='mx-2'></FaUserPlus>
                    <Link className='mr-5 font-bold text-xl' to='/signup'>Sign Up</Link>
                </div>
            </>
        }






    </>

    return (
        <div className='mt- text-white'>
            {/* <div className='flex justify-center items-center'>
                <img className='w-16 mr-3' src={laptop} alt="" />
                <Link to='/'> <p className=" btn-ghost text-4xl font-bold warning-content text-center mb-4 text-indigo-600">Sell-Buy-Laptop</p> </Link>
            </div> */}
            <div className="navbar bg-indigo-500 px-8">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {
                                item
                            }
                        </ul>
                    </div>

                    <Link to='/' className="text-3xl hidden lg:block font-bold text-indigo-900">SELL-Buy-Laptop</Link>
                </div>
                <div className="navbar-center hidden lg:block">
                    <ul className="menu menu-horizontal p-0">
                        {
                            item
                        }
                    </ul>
                </div>

                <div className="avatar navbar-end">
                    <div className="dropdown ">
                        <label htmlFor="deshbord-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">

                        </ul>
                    </div>
                </div>
                <div className="avatar hidden lg:block">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://www.shutterstock.com/image-photo/portrait-business-man-on-background-260nw-595165913.jpg" />
                    </div>
                </div>
            </div >
        </div>


    );
};

export default Navbar;