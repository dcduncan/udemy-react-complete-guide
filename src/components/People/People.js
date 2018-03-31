import React, { Component } from 'react'
import Person from './Person/Person'

class People extends Component {
    render() {
        return this.props.people.map((person, index) => {
            let hobbies = 'I have no hobbies';
            if (person.hobbies) {
                hobbies = 'My hobbies include: ' + person.hobbies.join(',')
            }
            return <Person
                name={person.name}
                age={person.age}
                clickHandler={() => this.props.clicked(index)}
                changeHandler={event => this.props.changed(event, person.id)}
                key={person.id}>
                {hobbies}
            </Person>
        });
    }
}

export default People;