import React from 'react'

function bandHeadCard(data) {
    return (
        <div className="card bandHead">
            <div className="card-header">${data.name}</div>
            <div className="card-body">
                <ul class="band-list">
                    <li className="band-genre">Genre: ${data.genre}</li>
                    <li className="band-location">Locaton: ${data.location}</li>
                </ul>
            </div>
        </div>
        
    )

}

export default bandHeadCard;
