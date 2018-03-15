import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state = {
        people: [
            {
                name: 'Max',
                age: 28,
                id: 'jf3oi23jmr'
            },
            {
                name: 'Manu',
                age: 29,
                id: 'fqwfaa3',
                hobbies: ['racing']
            },
            {
                name: 'DJ',
                age: 25,
                id: 'fj982elwekf',
                hobbies: ['gaming', 'eating']
            },
        ],
        showPeople: false
    };

    togglePeopleHandler = () => {
        this.setState({
            showPeople: !this.state.showPeople
        })
    };

    deletePersonHandler = (index) => {
        const people = [...this.state.people];
        people.splice(index, 1);
        this.setState({
            people: people
        })
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.people.findIndex(person => person.id === id);
        const newPerson = {
            ...this.state.people[personIndex]
        };

        newPerson.name = event.target.value;
        const newPeople = [...this.state.people];
        newPeople[personIndex] = newPerson;
        this.setState({
            people: newPeople,
        })
    };

    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let people = null;
        if (this.state.showPeople) {
            people = (
                <div>
                    {
                        this.state.people.map((person, index) => {
                            let hobbies = 'I have no hobbies';
                            if (person.hobbies) {
                                hobbies = 'My hobbies include: ' + person.hobbies.join(',')
                            }
                            return <Person
                                name={person.name}
                                age={person.age}
                                clickHandler={() => this.deletePersonHandler(index)}
                                changeHandler={event => this.nameChangeHandler(event, person.id)}
                                key={person.id}>
                                {hobbies}
                            </Person>
                        })
                    }
                </div>
            );
            buttonStyle.backgroundColor = 'red';
        }

        const paragraphClasses = [];
        if (this.state.people.length < 3) {
            paragraphClasses.push('red');
        }

        if (this.state.people.length < 2) {
            paragraphClasses.push('bold');
        }


        return (
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
                <p className={paragraphClasses.join(' ')}>This is really working!</p>
                <button
                    onClick={this.togglePeopleHandler}
                    style={buttonStyle}>
                    Toggle Show People
                </button>
                {people}
            </div>
        );
    }
}

export default App;
