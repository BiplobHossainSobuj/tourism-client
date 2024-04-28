import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loader){
        return <span className="loading loading-dots loading-lg"></span>;
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;