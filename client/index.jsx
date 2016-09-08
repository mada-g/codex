import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, dispatch} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {List, Map, fromJS, toJS} from 'immutable';
import {Provider} from 'react-redux';

import '../src/scss/style.scss';

import reducer from '../src/store/reducer/index.js';
import * as actions from '../src/store/actions/index.js';

import initState from '../src/store/initial.js';
import App from '../src/components/app.jsx';


/*
let pageContent = window.__init_state;

let initialState = {
  data: pageContent,
  app: {
    editor: true,
    imgInsertId: null,
    focus: null,
    after: 1
  }
}

console.log(initialState);
initialState = fromJS(initialState);
*/

let store = applyMiddleware(thunkMiddleware)(createStore)(reducer, fromJS(initState));
//let store = createStore(reducer, fromJS(initState));


//console.log(store.getState().toJS());
/*

store.dispatch(actions.deleteContent(55))

console.log(store.getState().toJS());
*/

render(<Provider store={store}>
  <App/>
</Provider>,
document.getElementById('react-view'));
