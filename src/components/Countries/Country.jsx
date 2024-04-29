import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={country.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country.country_Name}</h2>
                <p>{country.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allTouristSpot/countries/${country.country_Name}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Country;