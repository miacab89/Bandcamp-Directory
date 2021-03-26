import React, { Component } from 'react';
import Atlas from '../Atlas';
import SearchBar from '../SearchBar';
import './style.css';

export class index extends Component {
    render() {
        return (<div>
        <SearchBar />
        <Atlas />
        </div>
        )
    }
}

export default index