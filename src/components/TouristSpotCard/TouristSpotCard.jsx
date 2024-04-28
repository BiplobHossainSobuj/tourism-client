import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpotCard = ({ spot }) => {
    const {_id,spot_image,tourists_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality} =spot;
    const handleDetails=(id)=>{
        console.log('id',id);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p>Cost:{average_cost}</p>
                <p>Total Visitor:{totalVisitorsPerYear}</p>
                <p>Travel Time:{travel_time}</p>
                <p>Seasion:{seasonality}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allTouristSpot/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;