import React, { Component } from 'react';
import Atlas from '../Atlas';
import './style.css';

export class index extends Component {
    render() {
        return (<div>
        <form className="search">
            <input type="text" placeholder="Enter Artist, Label, Album, Lyrical Content, or Location"></input>
        </form>
        <button type="search">Search</button>
        
        <Atlas style={{ position: 'fixed', display: 'center' }}/>
        </div>
        )
    }
}

export default index