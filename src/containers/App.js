import React, { PureComponent } from 'react';
import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
import classes from './App.css';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor', props);
        this.state = {
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
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Update [App.js] Inside componentWillReceiveProps', nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Update [App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Update [App.js] Inside componentDidUpdate', this.props, this.state);
    }

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
        console.log('[App.js] Inside render');
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
            <WithClass classes={classes.App}>
                <button onClick={() => this.setState({ showPeople: true })}>Show People</button>
                <Cockpit
                    appTitle={this.props.title}
                    people={this.state.people}
                    buttonRed={this.state.showPeople}
                    clicked={this.togglePeopleHandler}
                />
                {people}
            </WithClass>
        );
    }
}

export default App;
