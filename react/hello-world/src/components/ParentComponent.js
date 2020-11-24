import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childData){
        //  alert(`hello ${this.state.parentName} from ${childData}`)
         document.write(childData);
        
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
                {/* Passing the refernce of greetParent Method to prop greetHandler*/}
            </div>
        )
    }
}

export default ParentComponent
