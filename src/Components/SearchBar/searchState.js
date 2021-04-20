import React, { useState, useEffect } from 'react';
import Search from './index.js';

function SearchState() {
    const [bands, getBands] = useState([]);
    const [searchText] = useState('');

    useEffect(() => {
        const state = useState; 
         console.log(state); 
       })

    const setFilter = bands.filter((e) => {
        if(e.bands.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
        else return false; 
    });


        return (
            <div>
                <Search 
                searchText={getBands}
                bands={setFilter}
                />
            </div>
        )
    
}

export default SearchState;




