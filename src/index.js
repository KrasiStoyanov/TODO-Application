import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './containers/TodoApp';
import reducer from './reducers';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);