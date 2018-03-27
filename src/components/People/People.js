import React from 'react'
import Person from './Person/Person'

const people = (props) =>
    props.people.map((person, index) => {
        let hobbies = 'I have no hobbies';
        if (person.hobbies) {
            hobbies = 'My hobbies include: ' + person.hobbies.join(',')
        }
        return <Person
            name={person.name}
            age={person.age}
            clickHandler={() => props.clicked(index)}
            changeHandler={event => props.changed(event, person.id)}
            key={person.id}>
            {hobbies}
        </Person>
    });

export default people;