import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount', this.props);
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount', this.props);
    }

    render() {
        console.log('[Person.js] Inside render', this.props);
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.clickHandler}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changeHandler} value={this.props.name}/>
            </WithClass>
        )
    }
}

export default Person;