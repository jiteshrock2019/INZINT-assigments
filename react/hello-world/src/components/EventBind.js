import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Good Bye DEvelopers..!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () =>{
        this.setState({
            message: 'Goood to all at the end...!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*1 <button onClick={this.clickHandler.bind(this)}>Click </button> */}
                {/*2 <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click for Byee</button>
            </div>
        )
    }
}

export default EventBind
