import {List, Map, fromJS, toJS} from 'immutable';

const INIT_STATE = Map();

export default function(state = INIT_STATE, action){
  switch (action.type) {
    case 'REMOVE_PAGE_INFO': {
      console.log(state);
      let pageType = null;
      let arr = null;
      let pageIndex = null;

      arr = state.getIn(['data', 'drafts']).toJS();

      pageIndex = arr.findIndex(n => n.pageid === action.pageid);
      if(pageIndex >= 0) pageType = "drafts";
      else{
        arr = state.getIn(['data', 'published']).toJS();
        pageIndex = arr.findIndex(n => n.pageid === action.pageid);
        if(pageIndex >= 0) pageType = "published";
        else pageIndex = null;
      }

      if(!pageType) return state;

      else{
        console.log('removing...');
        return state.updateIn(['data', pageType], val => val.delete(pageIndex))
      }
    }

    default:
      return state;
  }
}
