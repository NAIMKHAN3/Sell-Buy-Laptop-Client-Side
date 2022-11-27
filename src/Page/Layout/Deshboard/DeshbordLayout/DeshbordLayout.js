import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../../Share/Navbar/Navbar';

const DeshbordLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshbord-drawer" type="checkbox" className="drawer-toggle" />
                <div style={{}} className="drawer-content -10 p-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/deshboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/deshboard/allbuyer'>All Buyer</Link></li>
                        <li><Link to='/deshboard/allseller'>All Seller</Link></li>
                        <li><Link to='/deshboard/alluser'>All User</Link></li>
                        <li><Link to='/deshboard/myproduct'>My Product</Link></li>
                        <li><Link to='/deshboard/mybooking'>My Orders</Link></li>
                        <li><Link to='/deshboard/mywishlist'>My WishList</Link></li>
                        <li><Link to='/deshboard/mybuyer'>My buyer</Link></li>
                        <li><Link to='/deshboard/reportitems'>Reports Item</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshbordLayout;