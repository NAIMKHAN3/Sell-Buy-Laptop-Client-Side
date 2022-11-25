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

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/cetegoryitem/:id',

                loader: ({ params }) => fetch(`http://localhost:5000/cetegoryitem/${params.id}`), element: <CetegoryItem></CetegoryItem>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/deshboard', element: <Deshboard></Deshboard>, children: [
            {
                path: '/deshboard/addproduct', element: <AddProduct></AddProduct>
            },
            {
                path: '/deshboard/allbuyer', element: <AllBuyer></AllBuyer>
            },
            {
                path: '/deshboard/allseller', element: <AllSeller></AllSeller>
            },
        ]
    }
])