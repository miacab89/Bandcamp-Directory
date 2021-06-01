import React, {useState, useEffect} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './style.css'; 
import axios from 'axios'; 


function SearchBar() {

  const [bands, getBands] = useState([]);
  const [searchText, setSearchText] = useState('');


  function setFilter(e) {
    if(e.bands.filter().toLowerCase().includes(searchText.toLowerCase())) {
        return true;
        }
        else {
          return false; 
        }
    };

  function handleChange(event) {
    const { name, value } = event.target

    setSearchText(input => {
      return {
        ...input,
        [name]: value
      }
    })
  }
  

  useEffect(() => {
    async function getAllBands() {
      await axios.get("http://localhost:3500/bands");
    } 
    getAllBands();
  }, [bands]);

    return (
        <div className="searchbar">
          <Form inline>
            <FormControl type="text" 
            placeholder="Search Bands to Book" 
            className="mb-2 mr-sm-2" 
            size="lg" 
            style={{ width: '85vh', position: 'relative'}}
            searchText={getBands}
            value={setFilter}
            onChange={handleChange}
            name="bands"
            />
          </Form>
        <Button variant="dark">Search</Button>
        </div>
    )
}
    

export default SearchBar; 