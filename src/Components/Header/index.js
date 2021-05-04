import React from 'react'
import SearchBar from '../SearchBar/index.js'
import './style.css'

const Header = () => {
        return (
            <div className="jumbotron">
                <h1 className="title">In Lieu Report</h1>
                    <p></p>
                    <p className="lead"></p>
                    <SearchBar />
                     <hr className="my-4"></hr>
                        <p>Utilize our free research tools today for underground music journalist research!</p>
                        <p className="lead"></p>
    
            </div>
        )
    }


export default Header; 

