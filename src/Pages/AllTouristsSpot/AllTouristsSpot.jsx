import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';

const AllTouristsSpot = () => {
    const touristSpotDetails = useLoaderData();
    const [touristSpots, setTouristSpots] = useState(touristSpotDetails);
    const handleSort = ()=>{
        const filtered = touristSpots.filter(spot=>spot.average_cost);
        const sorted = filtered.sort((a,b)=>a.average_cost-b.average_cost);
        setTouristSpots(sorted);
    }
    return (
        <div className='container mx-auto'>
            <button onClick={handleSort} className="btn btn-outline">
                SORT
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    touristSpots.map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;