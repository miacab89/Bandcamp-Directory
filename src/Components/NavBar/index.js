import React from 'react'
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
// import { Link, Switch, Route } from 'react-router-dom';
import Pricing from '../../Pages/Pricing.js';
import Login from '../../Pages/Login.js'
import SignUp from '../../Pages/SignUp.js'
import Deactivate from '../../Pages/Deactivate.js'
import Directory from '../../Components/Directory'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import './style.css';


function NavBar() {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg" className="justify-content-left">
      <Navbar.Brand><FontAwesomeIcon icon={faCompass}></FontAwesomeIcon></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/directory" component={Directory}>Home</Nav.Link>
        <Nav.Link href="/pricing" component={Pricing}>Pricing</Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login" component={Login}>Login</NavDropdown.Item>
          <NavDropdown.Item href="/signup" component={SignUp}>Sign Up</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/deactivate" component={Deactivate}>Deactivate</NavDropdown.Item>
        </NavDropdown>
      </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar; 