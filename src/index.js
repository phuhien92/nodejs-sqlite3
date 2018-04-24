import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from './Routes';
import ContextWrapper from './components/common/ContextWrapper';
import axios from 'axios';
import reducers from './reducers'
const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(
    reducers,
    window.APP_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>  
    </Provider>,
    document.querySelectorAll('[data-ui-role="content"]')[0]
);