import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <form 
         className="form-inline"
         onSubmit={e => {
             e.preventDefault();
             if (!input.value.trim()) {
                 return;
             }

             dispatch(addTodo(input.value));
             input.value = '';
         }}>
            <input 
            type="text" 
            className="form-control" 
            ref={node => {
                input = node;
            }} />
            <button 
             type="submit" 
             role="button" 
             className="btn btn-primary">Add Todo</button>
        </form>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;