import React, { PropTypes } from 'react';

const TodoList = ({ todos }) => (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="list-group">
                    {todos.map(todo => 
                        <a 
                        key={todo.id} 
                        href="#" 
                        className="list-group-item list-group-item-action">{todo.text}</a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
};

export default TodoList;