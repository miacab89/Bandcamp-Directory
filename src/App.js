import './App.css';
import React, { Component } from 'react'; 
// import { render } from '@testing-library/react';
// import { Route, Switch, Link } from 'react-router-dom';
// import Tabs from './Components/Tabs' 
import Header from './Components/Header/index.js';
import NavBar from './Components/NavBar/index.js';



class App extends Component {
  render() {

  return ( 
    <div className="App">
      <NavBar />
      <div id="current-date">
      </div>
      <div className="App-header">
        <Header />
        <br></br>
      </div>
    </div>
    
    );
  }
}; 



export default App;
