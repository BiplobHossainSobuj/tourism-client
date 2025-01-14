import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
    const authInfo = useContext(AuthContext);
    const { createUser } = authInfo;
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
        // const newUser = { name, email, photoUrl, password };
        // console.log(newUser);
        if (password.length<6) {
            toast('Password must be 6 characters or longer');
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Password should have one uppercase latter');
            return
        }
        else if (!/[a-z]/.test(password)) {
            toast('Password should have one lowercase latter');
            return
        }
        createUser(name, email, password, photoUrl)
            .then(res => {
                const user = res.user;
                console.log(user);
                updateProfile(res.user, {
                    displayName: name, photoURL: photoUrl
                })
                toast('Registration successfull');
                form.reset();
            })
            .catch(err => {
                toast(err.message);
            })
    }

    return (
        <div className=" max-w-lg mx-auto bg-base-200">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    <span className='relative bottom-8 left-96' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <div>
                    <label className="label">
                        <p>Already have account ? Please <Link to="/login" className="text-blue-500 link link-hover">Login</Link> </p>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;