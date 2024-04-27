import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
            register
        </div>
    );
};

export default Register;