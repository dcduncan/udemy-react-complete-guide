import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state = {
        people: [
            {
                name: 'Max',
                age: 28
            },
            {
                name: 'Manu',
                age: 29,
                hobbies: ['racing']
            },
            {
                name: 'DJ',
                age: 25,
                hobbies: ['gaming', 'eating']
            },
        ],
        showPeople: false
    };

    switchNameHandler = (newName) => {
        // DON'T DO THIS this.state.people[0].name = 'Stephanie'
        const newPeople = [...this.state.people];
        newPeople[0].name = 'Stephanie';
        newPeople[1].name = newName;
        newPeople[2].age = 100;
        this.setState({
            people: newPeople,
        })
    };

    togglePeopleHandler = () => {
        this.setState({
            showPeople: !this.state.showPeople
        })
    };

    nameChangeHandler = (event) => {
        const newPeople = [...this.state.people];
        newPeople[0].name = 'Max';
        newPeople[1].name = event.target.value;
        newPeople[2].age = 25;
        this.setState({
            people: newPeople,
        })
    };

    render() {
        const buttonStyle = {
            backgroundColor: 'white',
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
                        this.state.people.map(person => {
                            let hobbies = 'I have no hobbies';
                            if (person.hobbies) {
                                hobbies = 'My hobbies include: ' + person.hobbies.join(',')
                            }
                            return <Person
                                name={person.name}
                                age={person.age}
                                clickHandler={this.switchNameHandler.bind(this, person.name.split('').reverse().join(''))}
                                changeHandler={this.nameChangeHandler}>
                                {hobbies}
                            </Person>
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
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
