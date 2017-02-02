import React from 'react';

import AddTodo from '../components/AddTodo';
import VisibleTodoList from './VisibleTodoList';
import TodoControls from './TodoControls';

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <TodoControls/>
    </div>
);

export default TodoApp;