import React from 'react';

const Hello = () =>{
    
    return(             // JSX method to write HTML 
        <div className="dummyClass">
            <h1> Hello REACT World..!!</h1>
        </div>
    );

    // return React.createElement(
    //     'div',
    //     { id: "heading", className: "header"},
    //     React.createElement('h1', null, 'Hello Developers') );
}

export default Hello;