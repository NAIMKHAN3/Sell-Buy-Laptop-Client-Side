
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Share/UserContex/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const location = useLocation();
    if (loading) {
        return <div className="text-center">
            <div class="flex justify-center items-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (user && user?.uid) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;