import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}><span className={`Icon_img ${props.completed && 'Icon_img--active'}`}></span></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete">x</span>
        </li>
    );
}

export { TodoItem };