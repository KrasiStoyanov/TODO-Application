import React from 'react';

import AddTodo from '../components/AddTodo';
import TodoList from './TodoList';
import TodoControls from './TodoControls';

const TodoApp = () => (
    <div>
        <AddTodo/>
        <TodoList/>
        <TodoControls/>
    </div>
);

export default TodoApp;