import {List, Map, fromJS, toJS} from 'immutable';

const INIT_STATE = Map();

export default function(state = INIT_STATE, action){
  switch (action.type) {

    case 'DELETE_PAGE_IN_PROG': {
      return state.setIn(['app', 'deletingpage'], true);
    }

    case 'DELETE_PAGE_END': {
      return state.setIn(['app', 'deletingpage'], false);
    }

    case 'REMOVE_PAGE_INFO': {
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
        return state.updateIn(['data', pageType], val => val.delete(pageIndex))
      }
    }

    default:
      return state;
  }
}
