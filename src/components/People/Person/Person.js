import React, { Component } from 'react';
import classes from './Person.css';

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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Update [Person.js] Inside shouldComponentUpdate', nextProps, nextState);
        return this.props.name !== nextProps.name || this.props.age !==  nextProps.age || this.props.children !== nextProps.children;
    }

    render() {
        console.log('[Person.js] Inside render', this.props);
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clickHandler}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changeHandler} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;