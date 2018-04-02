import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

    const paragraphClasses = [];
    if (props.people.length < 3) {
        paragraphClasses.push(classes.red);
    }

    if (props.people.length < 2) {
        paragraphClasses.push(classes.bold);
    }

    let buttonClasses = [classes.Button];
    if (props.buttonRed) {
        buttonClasses.push(classes.Red);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={paragraphClasses.join(' ')}>This is really working!</p>
            <button
                onClick={props.clicked}
                className={buttonClasses.join(' ')}
            >
                Toggle Show People
            </button>
        </Aux>
    );
};

export default cockpit;