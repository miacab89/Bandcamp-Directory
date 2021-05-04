import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-bootstrap';
import Directory from './Components/Directory/index.js';
import Index from './Components/Index/index.js'; 
import Profile from './Components/Profile/index.js';
 

const DirectoryMain = () => <Directory/>
const IndexMain = () => <Index/>
const ProfileMain = () => <Profile/>

export class MenuDash extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
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
            </div>
        )
    }
}

export default MenuDash
