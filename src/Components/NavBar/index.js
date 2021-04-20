import React from 'react'
import { Link } from 'react-router-dom';
// import Pricing from '../Pages/Pricing.js'; 
import './style.css';

// const PricingMain = () => <Pricing />

const NavBar = () => {

    // const { path } = this.props.match;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
            <Link className="nav-link" href="#">Home</Link>
            <Link className="nav-link" href="#">Features</Link>
            {/* <Link className="nav-link" to={`${path}/pricing`} component={PricingMain}>Pricing</Link> */}
            <Link className="nav-link disabled" href="#">Disabled</Link>
        </ul>
        </div>
        </nav>
    )
}

export default NavBar; 