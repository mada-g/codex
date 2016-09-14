import {List, Map, fromJS, toJS} from 'immutable';

const INIT_STATE = Map();

export default function(state = INIT_STATE, action){
  switch (action.type) {
    case 'expression': {

    }
    default:
      return state;
  }
}
