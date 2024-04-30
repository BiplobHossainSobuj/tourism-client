import React, { useEffect, useState } from 'react';
import Carosel from '../../components/Carosel/Carosel';
import { useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';
import Countries from '../../components/Countries/Countries';
import Services from '../../components/Services/Services';
import Blogs from '../../components/Blogs/Blogs';

const Home = () => {
    const loadedAllSpots = useLoaderData();
    const [touristSpots,setTouristSpots] = useState(loadedAllSpots);
    return (
        <div className='container mx-auto'>
            <Carosel></Carosel>
            <h1 className='font-extrabold text-5xl text-center mt-6'>Tourist Spot</h1>
            <div className='grid my-24 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {touristSpots.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)}
            </div>
            <h1 className='font-extrabold text-5xl text-center mt-6'>Country</h1>
            <Countries></Countries>
            <h1 className='font-extrabold text-5xl text-center mt-6'>We Offers</h1>
            <Services></Services>
            <h1 className='font-extrabold text-5xl text-center my-10'>Blogs & Reviews</h1>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;