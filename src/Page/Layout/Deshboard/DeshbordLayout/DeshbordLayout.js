import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../../Share/Navbar/Navbar';
import { AuthContex } from '../../../Share/UserContex/UserContext';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';

const DeshbordLayout = () => {
    const { user } = useContext(AuthContex);
    const [isAdmin, isLoading] = useAdmin(user?.email)
    const [isSeller, loading] = useSeller(user?.email)
    const [isBuyer, isLoadings] = useBuyer(user?.email)



    if (isLoading) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }
    if (loading) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }
    if (isLoadings) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

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

                        {
                            isAdmin === 'admin' && <>
                                <li><Link to='/deshboard/allbuyer'>All Buyer</Link></li>
                                <li><Link to='/deshboard/allseller'>All Seller</Link></li>
                                <li><Link to='/deshboard/alluser'>All User</Link></li>
                                <li><Link to='/deshboard/reportitems'>Reports Item</Link></li>
                            </>
                        }
                        {
                            isSeller === 'seller' && <>
                                <li><Link to='/deshboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/deshboard/myproduct'>My Product</Link></li>
                                <li><Link to='/deshboard/mybuyer'>My buyer</Link></li>
                            </>
                        }
                        {
                            isBuyer === 'buyer' && <>
                                <li><Link to='/deshboard/mybooking'>My Orders</Link></li>
                                <li><Link to='/deshboard/mywishlist'>My WishList</Link></li>
                            </>
                        }





                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshbordLayout;