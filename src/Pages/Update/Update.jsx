import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { SiSession } from 'react-icons/si';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const loadedTouristSpot = useLoaderData();
    console.log(loadedTouristSpot);
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const tourists_spot_name = form.spotName.value;
        const country_Name = form.countryName.value;
        const spot_image = form.spotImage.value;
        const location = form.location.value;
        const description = form.description.value;
        const average_cost = form.avgCost.value;
        const seasonality = form.season.value;
        const travel_time = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitor.value;
        // const user_name = form.name.value;
        const user_email = loadedTouristSpot.user_email;
        const updatedDetails = { tourists_spot_name, country_Name,spot_image,location,description,average_cost,seasonality,travel_time,totalVisitorsPerYear };
        console.log(updatedDetails);
        fetch(`https://tourism-management-server-five.vercel.app/update/${loadedTouristSpot._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast('Updated Succesfully')
        })
    }
    return (
        <div>
            <form className="m-2" onSubmit={handleUpdate}>
                <div className='w-full md:w-3/4 mx-auto md:flex lg:flex justify-between gap-6'>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Tourist Spot:</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaLocationDot />
                                <input type="text" name="spotName" className="grow" placeholder="Username" />
                            </label>
                        </div>
                        <div>
                            <p>Contry:</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaLocationDot />
                                <input type="text" name="countryName" className="grow" placeholder="Username" />
                            </label>
                        </div>
                        <div>
                            <p>Session</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <SiSession />
                                <input type="text" name="season" className="grow" placeholder="write a short description" />
                            </label>
                        </div>
                        <div>
                            <p>Travel Time</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <SiSession />
                                <input type="text" name="travelTime" className="grow" placeholder="write a short description" />
                            </label>
                        </div>
                        <div>
                            <p>Description</p>
                            <label className="input input-bordered input-lg w-full py-16 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="description" className="grow" placeholder="write a short description" />
                            </label>
                        </div>

                    </div>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Image</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="spotImage" className="grow" placeholder="Email" />
                            </label>
                        </div>
                        <div>
                            <p>Location</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="location" className="grow" placeholder="Email" />
                            </label>
                        </div>
                        <div>
                            <p>Total Visitor</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="totalVisitor" className="grow" placeholder="Email" />
                            </label>
                        </div>
                        <div>
                            <p>Avarage Cost</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="avgCost" className="grow" placeholder="Email" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 flex justify-center mx-auto my-4">
                    <input type="submit" className=" btn btn-block btn-outline btn-success text-white" value='Update' />
                </div>
            </form>
        </div>
    );
};

export default Update;