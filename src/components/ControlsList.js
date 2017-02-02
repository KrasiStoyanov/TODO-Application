import React from 'react';
import TodoControls from '../containers/TodoControls';
import * as ActionTypes from '../constants/ActionTypes';

const TodoControlssList = () => (
    <div className="btn-group">
        <TodoControls filter={ActionTypes.SHOW_ALL}>Show All</TodoControls>
        <TodoControls filter={ActionTypes.SHOW_ACTIVE}>Show Active</TodoControls>
        <TodoControls filter={ActionTypes.SHOW_COMPLETED}>Show Completed</TodoControls>
    </div>
);

export default TodoControlssList;