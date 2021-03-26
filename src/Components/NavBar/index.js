import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">Navbar</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
            <Link className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
            <Link className="nav-link" href="#">Features</Link>
            <Link className="nav-link" href="#">Pricing</Link>
            <Link className="nav-link disabled" href="#">Disabled</Link>
        </ul>
        </div>
        </nav>
    )
}

export default NavBar; 