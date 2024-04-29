import React, { useEffect, useState } from 'react';
import Carosel from '../../components/Carosel/Carosel';
import { useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';
import Countries from '../../components/Countries/Countries';

const Home = () => {
    const loadedAllSpots = useLoaderData();
    const [touristSpots,setTouristSpots] = useState(loadedAllSpots);
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-primary'>this is home</h1>
            <Carosel></Carosel>
            <h1>Tourist Spot</h1>
            <div className='grid my-24 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {touristSpots.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)}
            </div>
            <h1>Country</h1>
            <Countries></Countries>
        </div>
    );
};

export default Home;