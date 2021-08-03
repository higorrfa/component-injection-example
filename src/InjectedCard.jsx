import React from 'react'
import './InjectedCard.css'

function InjectedCard({ name, age }) {
    return (
        <div className="cardContainer">
            I'm a injected card
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
            </ul>
        </div>
    )
}

export default InjectedCard
