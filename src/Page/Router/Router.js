import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Deshboard from "../Layout/Deshboard/Deshboard"
import AddProduct from "../Layout/Deshboard/AddProduct/AddProduct";
import CetegoryItem from "../CetegoryItem/CetegoryItem";
import AllBuyer from "../Layout/Deshboard/AllBuyer/AllBuyer";
import AllSeller from "../Layout/Deshboard/AllSeller/AllSeller";
import AllUser from "../Layout/Deshboard/AllUser/AllUser";
import MyWishList from "../Layout/Deshboard/MyWishList/MyWishList";
import ReportsItem from "../Layout/Deshboard/ReportsItem/ReportsItem";
import MyProduct from "../Layout/Deshboard/MyProduct/MyProduct";
import MyBooking from "../Layout/Deshboard/MyBooking/MyBooking";
import Payment from "../Layout/Deshboard/Payment/Payment";
import MyBuyer from "../Layout/Deshboard/MyBuyer/MyBuyer";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/cetegoryitem/:id',

                loader: ({ params }) => fetch(`https://sell-buy-laptop-server-side.vercel.app/cetegoryitem/${params.id}`, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }), element: <PrivateRoute><CetegoryItem></CetegoryItem></PrivateRoute>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/deshboard', element: <Deshboard></Deshboard>, errorElement: <ErrorPage></ErrorPage>, children: [
            {
                path: '/deshboard/addproduct', element: <AddProduct></AddProduct>
            },
            {
                path: '/deshboard/allbuyer', element: <AllBuyer></AllBuyer>
            },
            {
                path: '/deshboard/allseller', element: <AllSeller></AllSeller>
            },
            {
                path: '/deshboard/alluser', element: <AllUser></AllUser>
            },
            {
                path: '/deshboard/mywishlist', element: <MyWishList></MyWishList>
            },
            {
                path: '/deshboard/reportitems', element: <ReportsItem></ReportsItem>
            },
            {
                path: '/deshboard/myproduct', element: <MyProduct></MyProduct>
            },
            {
                path: '/deshboard/mybooking', element: <MyBooking></MyBooking>
            },
            {
                path: '/deshboard/mybuyer', element: <MyBuyer></MyBuyer>
            },
            {
                path: '/deshboard/payment/:id',
                loader: ({ params }) => fetch(`https://sell-buy-laptop-server-side.vercel.app/payment/${params.id}`, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }),
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
        ]
    }
])