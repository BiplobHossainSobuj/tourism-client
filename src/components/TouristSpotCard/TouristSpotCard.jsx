import React from 'react';

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
                    <button onClick={()=>handleDetails(_id)} className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;