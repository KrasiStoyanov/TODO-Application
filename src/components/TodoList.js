import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoClick }) => (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="list-group">
                    {todos.map(todo => 
                        <TodoItem 
                        key={todo.id} 
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}/>
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
    })).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;