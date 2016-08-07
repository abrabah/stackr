import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './stores/store';
import Stackr from './containers/Stackr';
import './styles/stackr.scss';
import {Provider} from 'react-redux';
import DevTools from './containers/DevTools';

const store = configureStore();

render(
    <Provider store={store}>
        <div>
            <Stackr/>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);
