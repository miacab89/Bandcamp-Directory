import React, { Component } from 'react'
import NavBar from '../Components/NavBar'
import Directory from '../Components/Directory'
import './style.css';

export class Pricing extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <p>THIS IS THE PRICING PAGE</p>
                <Directory />
            </div>
        )
    }
}

export default Pricing
