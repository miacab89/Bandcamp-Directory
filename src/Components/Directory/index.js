import React, { Component } from 'react'
import Atlas from '../Atlas'

export class index extends Component {
    render() {
        return (
        <form>
            <div>
                <label style={{ margin: '10%'}} className="artist-data">Artist</label> 
                <input placeholder="Enter Artist Name"></input>
                <br></br>
                <label style={{ margin: '10%'}} className="artist-data">Genre</label> 
                <input placeholder="Enter Genre (i.e. Death Metal, Thrash, etc."></input>
                <br></br>
                <label style={{ margin: '10%'}} className="artist-data">Location</label> 
                <input placeholder="Enter City/State/Country"></input>
                <br></br>
                <label style={{ margin: '10%'}} className="artist-data">Label</label> 
                <input placeholder="Enter Label"></input>
                <br></br>
                <label style={{ margin: '10%'}} className="artist-data">Lyrical Themes</label> 
                <input placeholder="Enter Lyrical Theme"></input>
            </div>
            <button type="search">Search</button>
            <br></br>
            <br></br>
            <br></br>
            <Atlas />
        </form>
        )
    }
}

export default index