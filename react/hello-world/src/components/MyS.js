import React, {Component} from 'react';

class MyS extends Component{

    constructor(){
        super();
        this.state ={
            notice: 'No smoking area!!'
        }
    }

    changeNotice(){
        this.setState({
            notice: 'Dhumrapaan Neesedh hai...!'
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.notice} </h1>
                <button onClick={ () =>{ this.changeNotice()}}>Convert to hindi</button>
            </div>
        )
    }
}

export default MyS;
