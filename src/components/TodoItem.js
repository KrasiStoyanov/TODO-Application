import React, { PropTypes } from 'react';

const TodoItem = ({ onTodoToggle, onTodoRemove, completed, text }) => (
    <li className="rounded mb-4 mt-4">
        <span className="p-2">{text}</span>
        <a 
         href="#" 
         className="p-2" 
         onClick={e => {
            e.preventDefault();
            onTodoToggle();
         }}>
            <i className={"fa " + (completed ? "fa-remove" : "fa-check")}></i>
        </a>
         <a 
         href="#" 
         className="p-2" 
         onClick={e => {
            e.preventDefault();
            onTodoRemove();
         }}>
            <i className="fa fa-trash-o"></i>
        </a>
    </li>
);

TodoItem.propTypes = {
    onTodoToggle: PropTypes.func.isRequired,
    onTodoRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;