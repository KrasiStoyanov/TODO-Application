import * as ActionTypes from '../constants/ActionTypes';

let nextTodoId = 0;
export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    id
});

export const setVisibilityFilter = (filter) => ({
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
});