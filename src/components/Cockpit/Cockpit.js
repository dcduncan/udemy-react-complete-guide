import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    const paragraphClasses = [];
    if (props.people.length < 3) {
        paragraphClasses.push(classes.red);
    }

    if (props.people.length < 2) {
        paragraphClasses.push(classes.bold);
    }

    let buttonClass = '';

    if (props.buttonRed) {
        buttonClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App!</h1>
            <p className={paragraphClasses.join(' ')}>This is really working!</p>
            <button
                onClick={props.clicked}
                className={buttonClass}
            >
                Toggle Show People
            </button>
        </div>
    );
};

export default cockpit;