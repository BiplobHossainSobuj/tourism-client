import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setSpots] = useState([]);
    console.log(user)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-server-five.vercel.app/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            const remaining = spots.filter(user => user._id !== id)
                            setSpots(remaining);

                        }
                    })
                  
            }
        });

    }

    useEffect(() => {
        fetch(`https://tourism-management-server-five.vercel.app/mylist/${user.email}`)
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
                        <tr className='font-bold bg-slate-600 text-white text-xl'>
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
                                        <span><button onClick={() => handleDelete(spot._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button></span>
                                        <span><Link to={`/update/${spot._id}`}>
                                            <button className="btn btn-circle btn-outline">
                                                <FaRegEdit />
                                            </button></Link></span>
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