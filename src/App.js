import './App.css';
import React, { Component } from 'react'; 
// import { render } from '@testing-library/react';
import { Route, Switch, Link } from 'react-router-dom';
// import Tabs from './Components/Tabs';
import Directory from './Components/Directory/index.js';
import Index from './Components/Index/index.js'; 
import Profile from './Components/Profile/index.js'; 



const DirectoryMain = () => <Directory/>
const IndexMain = () => <Index/>
const ProfileMain = () => <Profile/>

class App extends Component {

render() {
  const { path } = this.props.match;
   

  return (
    <div className="App">
      <div className="App-header">
        <h1>Metallum Global Directory</h1>      
        <h5>Powered by the Unofficial Metal Archives API & Google Maps</h5>
        <div className="links">
          <Link to={`${path}`} className="link">Directory</Link>
          <Link to={`${path}/index/`} className="link">Index</Link>
          <Link to={`${path}/profile`} className="link">Profile</Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${path}`} exact component={DirectoryMain} />
            <Route path={`${path}/index`} component={IndexMain} />
            <Route path={`${path}/profile`} component={ProfileMain} />
          </Switch>
        </div>
        {/* <Atlas /> */}
        </div>
    </div>
    );
  }
}; 
export default App;
