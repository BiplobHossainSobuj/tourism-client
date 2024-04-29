import React, { useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';

const CountryDetails = () => {
    const loadedCountries = useLoaderData();
    console.log(loadedCountries)
    const [spots,setSpots] = useState(loadedCountries)
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
            {
                spots.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
        </div>
    );
};

export default CountryDetails;