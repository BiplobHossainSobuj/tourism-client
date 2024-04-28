import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TouristSpotDetails = () => {
    const loadedDetails = useLoaderData();
    const [spots, setSpots] = useState(loadedDetails);
    const { tourists_spot_name, country_Name,spot_image,location,description,average_cost,seasonality,travel_time,totalVisitorsPerYear,user_name,user_email } = loadedDetails;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetails;