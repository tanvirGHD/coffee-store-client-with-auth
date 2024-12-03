import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {

    const coffees = useLoaderData();
    console.log(coffees);

    // Check if coffees is an array before using map
    const [loadedCoffees, setLoadedCoffees] = useState([]);

    useEffect(() => {
        if (Array.isArray(coffees)) {
            setLoadedCoffees(coffees);
        }
    }, [coffees]);

    return (
        <div>
            <h2>Welcome Coffee home: {loadedCoffees.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    loadedCoffees && loadedCoffees.length > 0 ? (
                        loadedCoffees.map(coffee => (
                            <Coffee
                                key={coffee._id}
                                coffee={coffee}
                                loadedCoffees={loadedCoffees}
                                setLoadedCoffees={setLoadedCoffees}
                            />
                        ))
                    ) : (
                        <p>No coffees available</p>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
