import React from 'react';

import AddTodo from '../components/AddTodo';
import VisibleTodoList from './VisibleTodoList';
import ControlsList from '../components/ControlsList';

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <ControlsList/>
    </div>
);

export default TodoApp;