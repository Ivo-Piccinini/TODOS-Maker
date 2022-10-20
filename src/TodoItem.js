import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert('ya completaste el todo ' +'"'+ props.text +'"')
    };

    const onDelete = () => {
        alert('borraste el todo ' +'"'+ props.text +'"')
    };

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
                >

            <span className={`Icon_img ${props.completed && 'Icon_img--active'}`}></span>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
                >
                    x
            </span>
        </li>
    );
}

export { TodoItem };