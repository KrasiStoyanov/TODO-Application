import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
    todos: state.todos
});

const VisibleTodoList = connect(
    mapStateToProps,
    null
)(TodoList);

export default VisibleTodoList;