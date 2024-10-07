import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState({}); // Corrected useState initialization

    useEffect(() => {
        fetch('https://api.github.com/users/somusidar2712')
            .then(response => response.json()) // Call the json() method correctly
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []); // Dependency array is left empty for running only on mount

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4'>
            Github followers: {data.followers}
        </div>
    );
}

export default Github;
