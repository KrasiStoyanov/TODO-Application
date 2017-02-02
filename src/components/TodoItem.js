import React, { PropTypes } from 'react';

const TodoItem = ({ onClick, completed, text }) => (
    <li className="list-group-item">
        <span className="p-2">{text}</span>
        <a 
         href="#" 
         className="p-2" 
         onClick={e => {
            e.preventDefault();
            onClick();
         }}>
            <i className={"fa " + (completed ? "fa-remove" : "fa-check")}></i>
        </a>
    </li>
);

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;