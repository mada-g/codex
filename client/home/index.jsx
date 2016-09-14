import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, dispatch} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {List, Map, fromJS, toJS} from 'immutable';
import {Provider} from 'react-redux';

import reducer from '../../home/store/reducer/index.js';
import * as actions from '../../home/store/actions/index.js';

import initState from '../../home/store/initial.js';

import App from '../../home/components/app.jsx';

import '../../home/scss/x_style_home.scss';


let userData = window.__init_state;

console.log(userData);

let initialState = {
  data: userData
}

console.log(initialState);
initialState = fromJS(initialState);


//initialState = fromJS(initState);

let store = applyMiddleware(thunkMiddleware)(createStore)(reducer, initialState);

render(<Provider store={store}>
  <App/>
</Provider>,
document.getElementById('react-view'));
