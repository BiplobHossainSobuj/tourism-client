import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';
import { FaSort } from "react-icons/fa";
const AllTouristsSpot = () => {
    const touristSpotDetails = useLoaderData();
    const [touristSpots, setTouristSpots] = useState(touristSpotDetails);
    const handleSort = () => {
        const filtered = touristSpots.filter(spot => spot.average_cost);
        const sorted = filtered.sort((a, b) => a.average_cost - b.average_cost);
        setTouristSpots(sorted);
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center my-4'>
                <button onClick={handleSort} className="btn btn-outline">
                    SORT
                    <FaSort />
                </button>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    touristSpots.map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;