import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import BandHeadCard from '../Directory/ResultCards/bandHeadCard';
// import { render } from '@testing-library/react';
// import SearchBar from '../SearchBar';
import './style.css';



function Profile () {
    const [ bands, getBands ] = useState([]); 
    const api = 'http://localhost:3500/bands'

    useEffect(() => {
        getAllBands(); 
    });

    
   const getAllBands = () => {
       axios.get(`${api}`)
       .then((response) => {
           const allBands = response.data.bands.allBands;
           getBands(allBands)
       }).catch(error => console.error(`Error: ${error}`)); 
   
    
    }
    return(
        <div><BandHeadCard bands={bands} /></div>
    )
};

export default Profile; 