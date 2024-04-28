import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TouristSpotDetails = () => {
    const loadedDetails = useLoaderData();
    console.log(loadedDetails);
    return (
        <div>
            {loadedDetails.tourists_spot_name}
        </div>
    );
};

export default TouristSpotDetails;