import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TouristSpotDetails = () => {
    const loadedDetails = useLoaderData();
    const [spots, setSpots] = useState(loadedDetails);
    const { tourists_spot_name, country_Name, spot_image, location, description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_name, user_email } = loadedDetails;
    return (
        <div className='container mx-auto'>
            <div className="card bg-base-100 shadow-xl">
            <figure><img className='rounded' src={spot_image} alt="Album" /></figure>
            <div className="card-body text-center">
                <p className='font-bold text-3xl'>{tourists_spot_name}</p>
                <p className='font-semibold text-lg'>{description}</p>
                <div className='divide-y text-xl divide-solid divide-gray-300'>
                    <div className='flex'>
                        <p>Country Name</p>
                        <p>{country_Name}</p>
                    </div>
                    <div className='flex'>
                        <p>Location</p>
                        <p>{location}</p>
                    </div>
                    <div className='flex'>
                        <p>Travle Time</p>
                        <p>{travel_time} days</p>
                    </div>
                    <div className='flex'>
                        <p>Average Cost</p>
                        <p>${average_cost}</p>
                    </div>
                    <div className='flex'>
                        <p>Seasonality</p>
                        <p>{seasonality}</p>
                    </div>
                    <div className='flex'>
                        <p>Total Visitors</p>
                        <p>${totalVisitorsPerYear}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Listen</button> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default TouristSpotDetails;