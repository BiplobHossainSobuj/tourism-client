import React from 'react';

const AddTouristSpot = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' />
                <input type="email" name='email' />
                <input type="submit" value='add' />
            </form>
        </div>
    );
};

export default AddTouristSpot;