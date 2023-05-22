import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coffees = () => {
    const coffees = useLoaderData();
    return (
        <div className='grid grid-cols-3'>
            {
                coffees.map(coffee => {
                    return (
                        <div key={coffee._id}>
                            <img src={coffee.imageUrl} alt="" />
                            <p className='text-center text-4xl font-mono font-bold uppercase'>{coffee.title}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Coffees;