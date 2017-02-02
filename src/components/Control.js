import React, { PropTypes } from 'react';

const Control = ({ active, children, onControlClick }) => (
    <button
     type="button" 
     role="button" 
     className={"btn btn-primary " + (active ? "disabled" : "")} 
     onClick={onControlClick}>{children}</button>
);

Control.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onControlClick: PropTypes.func.isRequired
};

export default Control;