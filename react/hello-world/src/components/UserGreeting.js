import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Jitesh!!</div>

        // // Rendering using ternary operator
        // return(    
        //     this.state.isLoggedIn ? (
        //         <div> Welcome Jitesh!</div> 
        //         ) : (
        //         <div> Welcome Guest!</div>
        //         )
        // )

        // let message             //Element variable conditional renderning.
        // if(this.state.isLoggedIn){
        //     message = <div> Welocme Jitesh </div>
        // }else {
        //     message = <div> Welcome Guest </div>
        // }

        // return <div>{message}</div>



        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Jitesh
        //         </div>
        //     )
        // } else{
        //     return (
        //         <div>
        //            <div>Welcome Guest</div>
        //         </div>
        //     )
        // }
    }   
}

export default UserGreeting

