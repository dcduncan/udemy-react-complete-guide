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
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App!</h1>
                <button>Switch Name</button>
                <Person name={this.state.people[0].name} age={this.state.people[0].age}>{this.state.people[0].hobbies === undefined || this.state.people[0].hobbies.length === 0 ? '' : 'My Hobbies: ' + this.state.people[0].hobbies.join(',')}</Person>
                <Person name={this.state.people[1].name} age={this.state.people[1].age}>{this.state.people[1].hobbies === undefined || this.state.people[1].hobbies.length === 0  ? '' : 'My Hobbies: ' + this.state.people[1].hobbies.join(', ')}</Person>
                <Person name={this.state.people[2].name} age={this.state.people[2].age}>{this.state.people[2].hobbies === undefined || this.state.people[2].hobbies.length === 0  ? '' : 'My Hobbies: ' + this.state.people[2].hobbies.join(', ')}</Person>
            </div>
        );
    }
}

export default App;
