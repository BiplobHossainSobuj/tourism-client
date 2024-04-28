import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyList = () => {
    const {user} = useContext(AuthContext);
    const [spots,setSpots] = useState([]);
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:5000/mylist/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSpots(data);
        })
    },[user])
    return (
        <div>
           my list:{spots.map(spt=>spt.tourists_spot_name)}
        </div>
    );
};

export default MyList;