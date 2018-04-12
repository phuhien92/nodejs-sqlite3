import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';
import ContextWrapper from './components/common/ContextWrapper';

ReactDOM.render(
    <ContextWrapper data={window.APP_STATE || {}}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>  
    </ContextWrapper>,
    document.querySelectorAll('[data-ui-role="content"]')[0]
);