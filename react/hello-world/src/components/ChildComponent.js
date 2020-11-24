import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={ () => props.greetHandler('Hello i am from the child component baby...!')}>Call Parent</button>
        </div>
    )
}

export default ChildComponent
