import React, { PureComponent } from 'react';
import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
import classes from './App.css';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

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
            showPeople: false,
            toggleCount: 0
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
        this.setState((previousState, props) => {
            return {
                showPeople: !this.state.showPeople,
                toggleCount: previousState.toggleCount + 1
            }
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
            <Aux>
                <button onClick={() => this.setState({ showPeople: true })}>Show People</button>
                <Cockpit
                    appTitle={this.props.title}
                    people={this.state.people}
                    buttonRed={this.state.showPeople}
                    clicked={this.togglePeopleHandler}
                />
                {people}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
