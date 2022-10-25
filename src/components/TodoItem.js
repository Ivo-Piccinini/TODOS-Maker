import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import '../styles/TodoItem.css';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />

            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>

            <DeleteIcon
                onDelete={props.onDelete}
            />

            {/* <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
                >

            <span className={`Icon_img ${props.completed && 'Icon_img--active'}`}></span>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
                    x
            </span> */}
        </li>
    );
}

export { TodoItem };