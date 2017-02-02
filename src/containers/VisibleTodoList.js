import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';
import * as ActionTypes from '../constants/ActionTypes';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case ActionTypes.SHOW_ALL:
            return todos;
        case ActionTypes.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case ActionTypes.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            throw new Error('Unregistered filter ' + filter);
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = ({
    onTodoClick: toggleTodo,
    onTodoRemove: removeTodo
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;