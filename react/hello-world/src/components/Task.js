import React from 'react'
import Hello from './Hello';

function Task() {
    
    var call= true;

    function callComponent(){
        call = !call;
    }


    return call && <div> <Hello /> </div>
    // return (
    //     <div>
    //        <button onClick={callComponent}>Click</button>  
    //     </div>
    // )
}

export default Task
