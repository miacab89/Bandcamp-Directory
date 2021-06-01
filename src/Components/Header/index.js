import {Component} from 'react'
import SearchBar from '../SearchBar/index.js'
import inlieu from '../../inlieu.png'
import './style.css'
import {Button} from 'react-bootstrap'

class Header extends Component{
    render() {
        return (
            <div className="jumbotron">
                <img src={inlieu} alt="inlieu" />
                    <p className="lead"></p>
                    <SearchBar />
                    <hr className="my-4"></hr>
                    <p>In Leiu Report assists with thousands of venues in their booking logistics.</p>
                    <p>Book a band today with our simple toolkits!</p>
                    <Button variant="dark" size="lg" href="/signup">Register</Button>
                    <p className="lead"></p>
    
            </div>
        )
    }
}

export default Header; 

