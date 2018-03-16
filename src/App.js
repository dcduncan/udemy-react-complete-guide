import React, { Component } from 'react';
import Person from './Person/Person'
import classes from './App.css';

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
        let people = null;
        let buttonClass = '';
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

            buttonClass = classes.Red;
        }

        const paragraphClasses = [];
        if (this.state.people.length < 3) {
            paragraphClasses.push(classes.red);
        }

        if (this.state.people.length < 2) {
            paragraphClasses.push(classes.bold);
        }


        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App!</h1>
                <p className={paragraphClasses.join(' ')}>This is really working!</p>
                <button
                    onClick={this.togglePeopleHandler}
                    className={buttonClass}
                    >
                    Toggle Show People
                </button>
                {people}
            </div>
        );
    }
}

export default App;
