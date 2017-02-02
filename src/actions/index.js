import * as ActionTypes from '../constants/ActionTypes';

let nextTodoId = 0;
export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
});