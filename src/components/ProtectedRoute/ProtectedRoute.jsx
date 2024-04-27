import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default ProtectedRoute;