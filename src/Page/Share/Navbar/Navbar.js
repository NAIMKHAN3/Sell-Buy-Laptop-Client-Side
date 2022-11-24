import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import laptop from '../Navbar/image/laptop.jpg'
import { AuthContex } from '../UserContex/UserContext';

const Navbar = () => {
    const { user, cetegorys } = useContext(AuthContex);

    if (!cetegorys) {
        return
    }



    const item = <>
        <Link className='mr-5 font-bold text-xl' to='/home'>Home</Link>
        <div className="dropdown hidden lg:block dropdown-hover">
            <label tabIndex={0} className="mr-5 cursor-pointer font-bold text-xl">Cetegories</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100">
                {
                    cetegorys.map(cetegory => <li key={cetegory._id}><Link to={`/cetegory/${cetegory._id}`}>{cetegory.name}</Link></li>)
                }
            </ul>
        </div>
        <Link className='mr-5 font-bold text-xl' to='/deshboard'>Deshboard</Link>
        <button className='mr-5 font-bold text-xl'>Log Out</button>
        <Link className='mr-5 font-bold text-xl' to='/login'>Log In</Link>
        <Link className='mr-5 font-bold text-xl' to='/signup'>Sign Up</Link>



    </>

    return (
        <div className='mt-7'>
            <div className='flex justify-center items-center'>
                <img className='w-16 mr-3' src={laptop} alt="" />
                <Link to='/'> <p className=" btn-ghost text-4xl font-bold text-orange-400 text-center">Sell-Buy-Laptop</p> </Link>
            </div>
            <div className="navbar bg-success px-8">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                item
                            }
                        </ul>
                    </div>

                    {/* <Link to='/' className="btn btn-ghost normal-case text-xl text-orange-400">SELL-Buy-Laptop</Link> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            item
                        }
                    </ul>
                </div>
                <div className="avatar navbar-end">
                    <div className="dropdown">
                        <label htmlFor="deshbord-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                </div>
            </div >
        </div>


    );
};

export default Navbar;