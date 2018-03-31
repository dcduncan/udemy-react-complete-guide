import React, { Component } from 'react'
import Person from './Person/Person'

class People extends Component {

    constructor(props) {
        super(props);
        console.log('[People.js] Inside constructor', props);
    }

    componentWillMount() {
        console.log('[People.js] Inside componentWillMount', this.props);
    }

    componentDidMount() {
        console.log('[People.js] Inside componentDidMount', this.props);
    }

    render() {
        console.log('[People.js] Inside render', this.props);
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