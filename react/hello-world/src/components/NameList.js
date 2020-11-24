import React from 'react'
import Person from './Person'

function NameList() {
    const persons =  [
        {
            id: 1,
            name: 'Ram',
            age: 24,
            skill: 'React/Angular'
        },
        {
            id: 2,
            name: 'Shyam',
            age: 20,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Mohan',
            age: 28,
            skill: 'Node'
        },
        {
            id: 4,
            name: 'Shiva',
            age: 18,
            skill: 'PHP'
        },
        {
            id: 5,
            name: 'Krishna',
            age: 23,
            skill: 'Devops'
        }

    ]
    const personList = persons.map( person => <Person person={person} />)
    
    return  <div>{ personList} </div>
}

export default NameList
