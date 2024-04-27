import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

const Header = () => {
    const authInfo = useContext(AuthContext);
    const {user,logOut} = authInfo;
    const [name, setName] = useState(null);
    const handleLogout =()=>{
        logOut()
        .then(()=>{
            console.log('log out');
        })
        .catch((err)=>{
            console.log('log out',err);
        })
    }
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTouristSpot'>All Toursits Spot</NavLink></li>
        <li><NavLink to='/addTouristSpot'>Add Tourist Spot</NavLink></li>
        <li><NavLink to='/myList'>My List</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={name}>
                                <span><Tooltip id="my-tooltip" /></span>
                            <img onMouseOver={() => setName(user.displayName)} className='w-10 mr-2 rounded-full hover:cursor-pointer' alt="user" src={user.photoURL} />
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline btn-success">Log Out</button>
                    </>:
                    <div>
                        <Link to='/login'><button className="btn btn-outline btn-success">Login</button></Link>
                        <Link to='/register'><button className="btn btn-outline btn-success">Register</button></Link>
                    </div>
                    
                }
            </div>
        </div>
    );
};

export default Header;