import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <form 
         onSubmit={e => {
             e.preventDefault();
             if (!input.value.trim()) {
                 return;
             }

             dispatch(addTodo(input.value));
             input.value = '';
         }}>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6 input-group">
                        <input 
                         type="text" 
                         className="form-control rounded" 
                         ref={node => {
                            input = node;
                        }} />
                        <span className="input-group-btn">
                            <button 
                             type="submit" 
                             role="button" 
                             className="btn btn-outline-primary rounded">Add Todo</button>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;