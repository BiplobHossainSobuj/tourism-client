import { FaLocationDot  } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TouristSpotCard = ({ spot }) => {
    const {_id,spot_image,tourists_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality,location} =spot;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body font-medium">
                <h2 className="card-title">{tourists_spot_name}<span className="badge badge-md"><FaLocationDot />{location}</span></h2>
                <div className='flex justify-between'>
                <p>Cost: ${average_cost}</p>
                <p>Vistors: {totalVisitorsPerYear}</p>
                </div>
                <div className="flex">
                <p>Travel Time: {travel_time} days</p>
                <p>Seasion:{seasonality}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/allTouristSpot/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;