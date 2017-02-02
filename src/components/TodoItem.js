import React, { PropTypes } from 'react';

const TodoItem = ({ onClick, completed, text }) => (
    <a  
     href="#" 
     className={
         "list-group-item list-group-item-action " + (completed ? 'active' : '')
     }
     onClick={onClick}>{text}</a>
);

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;