import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store';
import Stackr from './containers/Stackr';
import './styles/main.scss';

const store = configureStore();

render(
    <Stackr/>,
    document.getElementById('root')
);