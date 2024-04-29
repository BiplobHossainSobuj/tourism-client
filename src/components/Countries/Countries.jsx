import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/countries')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCountries(data);
        })
    },[])
    return (
        <div>
            {
                countries.map(country=><Country key={country._id} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;