import './App.css';
import React, { Component } from 'react'; 
// import { render } from '@testing-library/react';
// import { Route, Switch, Link } from 'react-router-dom';
// import Tabs from './Components/Tabs' 
import Header from './Components/Header/index.js';
import NavBar from './Components/NavBar/index.js';
import SearchBar from './Components/SearchBar/index.js'


class App extends Component {

render() {
  return (
    <React.StrictMode>
    <div className="App">
      <NavBar />
      <div className="App-header">
        <Header />
        <h3>Metallum Directory</h3>      
        <h5>Powered by the Unofficial Metal Archives API & Google Maps</h5>
        <SearchBar />
        <br></br>
      </div>
    </div>
    </React.StrictMode>
    );
  }
}; 
export default App;
