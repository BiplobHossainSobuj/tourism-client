import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { FaRegEdit } from "react-icons/fa";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setSpots] = useState([]);
    console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/mylist/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, [user])
    return (
        <div className='container mx-auto'>
            my list
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Avarage Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spots.map(spot =>
                                <tr key={spot._id}>
                                    <th>{spot.tourists_spot_name}</th>
                                    <td>{spot.country_Name}</td>
                                    <td>{spot.average_cost}</td>
                                    <td className='flex items-center lg:space-x-6'>
                                        <span><button className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button></span>
                                        <span><button className="btn btn-circle btn-outline">
                                        <FaRegEdit />
                                        </button></span>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyList;