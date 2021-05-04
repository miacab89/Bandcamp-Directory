import React from 'react';
import {Form, FormControl} from 'react-bootstrap';
import './style.css'; 


const SearchBar = (props) => {

    return (
        <div className="searchbar">
          <Form inline>
            <FormControl type="text" 
            placeholder="Search Article (title, author, keyword)" 
            className="mb-2 mr-sm-2" 
            size="lg" 
            style={{ width: '85vh', position: 'relative'}} />
          </Form>
        </div>
    )
}
    

export default SearchBar; 