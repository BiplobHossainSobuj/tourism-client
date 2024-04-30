import { FaLocationDot,FaUsers,FaMoneyCheckDollar  } from "react-icons/fa6";
import { SiSession } from "react-icons/si";
import { toast } from "react-toastify";
import { FaRegCalendarTimes,FaImage  } from "react-icons/fa";
const AddTouristSpot = () => {
    const handleSubmit = (e) => {
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
        const user_name = form.name.value;
        const user_email = form.email.value;
        const touristsSpotDetails = { tourists_spot_name, country_Name,spot_image,location,description,average_cost,seasonality,travel_time,totalVisitorsPerYear,user_name,user_email };
        console.log(touristsSpotDetails);
        fetch('https://tourism-management-server-five.vercel.app/allTouristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(touristsSpotDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your spot added successfully');
                console.log(data);
            })
    }
    return (
        <div>
            <form className="m-2" onSubmit={handleSubmit}>
                <div className='w-full md:w-3/4 mx-auto md:flex lg:flex justify-between gap-6'>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Tourist Spot:</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaLocationDot />
                                <input type="text" name="spotName" className="grow" placeholder="Your Tourist Spot Name" required/>
                            </label>
                        </div>
                        <div>
                            <p>Contry:</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaLocationDot />
                                <input type="text" name="countryName" className="grow" placeholder="Tourist Country" required/>
                            </label>
                        </div>
                        <div>
                            <p>Session</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <SiSession />
                                <input required type="text" name="season" className="grow" placeholder="Ex: Summer,Winter.." />
                            </label>
                        </div>
                        <div>
                            <p>Travel Time</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaRegCalendarTimes />
                                <input type="text" name="travelTime" className="grow" placeholder="Days you wanna stay" required/>
                            </label>
                        </div>
                        <div>
                            <p>Description</p>
                            <label className="input input-bordered input-lg w-full py-16 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="description" className="grow" placeholder="write a short description"  required/>
                            </label>
                        </div>

                    </div>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Image</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaImage />
                                <input required type="text" name="spotImage" className="grow" placeholder="Spot Image" />
                            </label>
                        </div>
                        <div>
                            <p>Location</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaLocationDot />
                                <input required type="text" name="location" className="grow" placeholder="Spot Location" />
                            </label>
                        </div>
                        <div>
                            <p>Total Visitor</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaUsers />
                                <input required type="number" name="totalVisitor" className="grow" placeholder="Visitor Per Year" />
                            </label>
                        </div>
                        <div>
                            <p>Avarage Cost</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaMoneyCheckDollar />
                                <input type="number" name="avgCost" className="grow" placeholder="Avarage Cost" required />
                            </label>
                        </div>
                        <div>
                            <p>Your Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" name="name" className="grow" placeholder="Username" />
                            </label>
                        </div>
                        <div>
                            <p>Your Email</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" name="email" className="grow" placeholder="Your Email" required/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 flex justify-center mx-auto my-4">
                    <input type="submit" className=" btn btn-block btn-outline btn-success text-white" value='Add The Spot' />
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;