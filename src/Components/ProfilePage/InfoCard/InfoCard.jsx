import React from 'react'
import "./InfoCard.css"

function InfoCard(props) {
    return (
        <div>
            <div className="Card">
                <div className="cardHeadingDiv">
                    <h1>{props.heading}</h1>
                    <span className="elementDescription">{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
