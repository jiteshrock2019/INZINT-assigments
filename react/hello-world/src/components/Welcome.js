import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        return  <h1> hello to all class component {this.props.name} users from {this.props.location}</h1>
    }
}
export default Welcome;