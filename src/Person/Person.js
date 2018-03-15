import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clickHandler}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeHandler} value={props.name}/>
        </div>
    )
};

export default person;