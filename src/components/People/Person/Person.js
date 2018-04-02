import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

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
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render', this.props);
        return (
            <Aux>
                <p onClick={this.props.clickHandler}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={ (inputElement) => { this.inputElement = inputElement }}
                    type='text'
                    onChange={this.props.changeHandler}
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    position: PropTypes.number,
    age: PropTypes.number,
    changeHandler: PropTypes.func,
    clickHandler: PropTypes.func
};

export default withClass(Person, classes.Person);