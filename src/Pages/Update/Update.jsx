import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedTouristSpot = useLoaderData();
    console.log(loadedTouristSpot);
    return (
        <div>
            update:{loadedTouristSpot.user_email}
        </div>
    );
};

export default Update;