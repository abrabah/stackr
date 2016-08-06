import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store';
import Stackr from './containers/Stackr';
import './styles/main.scss';
import {Provider} from 'react-redux';


const store = configureStore();

render(
    <Provider store={store}>
        <Stackr/>
    </Provider>,
    document.getElementById('root')
)
;