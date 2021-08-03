import React from 'react'
import './RegularComponent.css'

function RegularComponent({InjectedComponent, InjectedCard}) {
    return (
        <div className="regularComponentContainer">
            I'm a regular component
            <InjectedComponent name="Regular Component"/>
            <InjectedCard name="João" age="25"/>
        </div>
    )
}

export default RegularComponent
