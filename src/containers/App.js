import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
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
        if (this.state.showPeople) {
            people =
                    <People
                        people={this.state.people}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                    />;


        }

        return (
            <div className={classes.App}>
                <Cockpit
                    people={this.state.people}
                    buttonRed={this.state.showPeople}
                    clicked={this.togglePeopleHandler}
                />
                {people}
            </div>
        );
    }
}

export default App;
