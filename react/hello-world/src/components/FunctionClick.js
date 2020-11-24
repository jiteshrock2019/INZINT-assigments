import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Button is clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>     
        {/* event handler is a function not the function call r.g. clickHandler() , this calls the function automatically   */}
        </div>
    )
}

export default FunctionClick
