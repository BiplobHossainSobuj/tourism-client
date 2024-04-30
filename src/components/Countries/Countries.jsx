import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://tourism-management-server-five.vercel.app/countries')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setCountries(data);
        })
    },[])
    return (
        <div className='grid my-24 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                countries.map(country=><Country key={country._id} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;