import React from 'react';

const Services = () => {
    return (
        <div className='md:flex justify-between my-24'>
            <div className='text-center'>
                <div className="flex justify-center">
                    <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/hotel-reception-concept-illustration_114360-12755.jpg?t=st=1714457196~exp=1714460796~hmac=c66e1009ee870e5dd373bc31ed1e9ccfcb935600baa678f9ff11f944ad7b8f7e&w=1380" alt="" />
                </div>
                <h3 className='font-bold text-2xl'>Where to Stay</h3>
                <p>We offer best hotel for you wihtin budget. <br /> We will provide as you want</p>
            </div>
            <div className='text-center'>
                <div className="flex justify-center">
                    <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/premium-vector/checking-map-illustration_22110-573.jpg?w=826" alt="" />
                </div>
                <h3 className='font-bold text-2xl'>Local Tour Guide</h3>
                <p>We offer local tour guide for your journey. <br /> We will provide with our package</p>
            </div>
            <div className='text-center'>
                <div className="flex justify-center">
                    <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/flat-reyes-magos-twitch-background_52683-148731.jpg?t=st=1714458506~exp=1714462106~hmac=cc9c294c3b81354a73869d79ccb266f5fad35d97565bc3b3d05dea5c84f335b5&w=1380" alt="" />
                </div>
                <h3 className='font-bold text-2xl'>Cultural Activities</h3>
                <p>You can enjoy cultural events & programs. <br /> This event is free of cost</p>
            </div>

        </div>
    );
};

export default Services;