import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Control from '../components/Control';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onControlClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const TodoControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(Control);

export default TodoControls;