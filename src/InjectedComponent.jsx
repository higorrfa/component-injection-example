import React from 'react'
import './InjectedComponent.css'

function InjectedComponent({name}) {
    return (
        <div className="injectedComponentContainer">
            I'm injected in a {name}
        </div>
    )
}

export default InjectedComponent
