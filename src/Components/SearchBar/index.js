import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './style.css'; 


const SearchBar = (props) => {

    return (
        <div className="searchbar">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mb-2 mr-sm-2" size="lg"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
    )
}
    

export default SearchBar; 