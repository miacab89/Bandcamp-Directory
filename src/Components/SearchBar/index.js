import React from 'react';
import './style.css'; 

const SearchBar = (props) => {

        return (
        <div class="search active">
            <input type="search" className="input" onChange={(e) => props.setFilter(e.target.value)} placeholder="Search Artist Profile" />
            <button>Search</button>
        </div>
    )
}
    

export default SearchBar; 