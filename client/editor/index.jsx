import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, dispatch} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {List, Map, fromJS, toJS} from 'immutable';
import {Provider} from 'react-redux';

import '../../src/scss/x_style_editor.scss';

import reducer from '../../src/store/reducer/index.js';
import * as actions from '../../src/store/actions/index.js';

import initState from '../../src/store/initial.js';
import App from '../../src/components/app.jsx';


let pageContent = window.__init_state;

let initialState = null;

if(pageContent){
  initialState = {
    data: pageContent,
    app: {
      editor: true,
      imgInsertId: null,
      focus: null,
      after: 1,
      saving: false,
      localsaving: false,
      hasLocalData: false,
      uploading: false
    }
  }
} else {
  initialState = initState;
}

initialState = fromJS(initialState);



let store = applyMiddleware(thunkMiddleware)(createStore)(reducer, initialState);
//let store = createStore(reducer, fromJS(initState));

console.log('CODEX by Georges Madalinski');


render(<Provider store={store}>
  <App/>
</Provider>,
document.getElementById('react-view'));
