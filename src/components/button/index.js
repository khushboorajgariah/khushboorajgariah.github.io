import React from 'react';
import './index.css';

export const Button = (props) => {
    let className = 'custom-btn', iconClass = 'button-icon-left';
    let onClick = props.onClick;

    let addClass = (classToAdd) => {
        className += ' ' + classToAdd;
    };

    if(props.solid) {
        addClass('solid');
    }

    if(props.disabled) {
        addClass('disabled');
        onClick = null;
    }

    if(props.className) {
        addClass(props.className);
    }

    return (
        <button className={className} onClick={onClick} onMouseUp={props.onMouseUp}>
            <div className="button-content">
                {props.text}
            </div>
        </button>
    )

};