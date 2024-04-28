import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';

const AllTouristsSpot = () => {
    const touristSpotDetails = useLoaderData();
    const [touristSpots,setTouristSpots] = useState(touristSpotDetails);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
            {
                touristSpots.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
        </div>
    );
};

export default AllTouristsSpot;