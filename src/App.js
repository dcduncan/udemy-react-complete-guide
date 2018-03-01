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

    togglePeopleHandler = () => {
        this.setState({
            showPeople: !this.state.showPeople
        })
    };

    deletePersonHandler = (index) => {
        const people = this.state.people;
        people.splice(index, 1);
        this.setState({
            people: people
        })
    };

    nameChangeHandler = (event, index) => {
        const newPeople = [...this.state.people];
        newPeople[index].name = event.target.value;
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
                        this.state.people.map((person, index) => {
                            let hobbies = 'I have no hobbies';
                            if (person.hobbies) {
                                hobbies = 'My hobbies include: ' + person.hobbies.join(',')
                            }
                            return <Person
                                name={person.name}
                                age={person.age}
                                clickHandler={() => this.deletePersonHandler(index)}
                                changeHandler={event => this.nameChangeHandler(event, index)}>
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
