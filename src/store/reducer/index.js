import {List, Map, fromJS, toJS} from 'immutable';

const INIT_STATE = Map();

function addID(offset, state, prevID, id){
  let at = state.getIn(['data', 'sections']).findKey(function(n){return n===prevID}) + offset;
  return state.updateIn(['data', 'sections'], val => val.insert(at, id));
}

export default function(state = INIT_STATE, action){

  switch (action.type) {

    case 'NEW_TEXT': {
      let val = action.val ? action.val : null;
      let newText = Map({type: "text", content: val, options: Map({align: "alignleft"}) });
      return addID(action.after, state, action.prevID, action.contentID).setIn(['data', 'items', action.contentID], newText);
    }

    case 'NEW_HEADER': {
      let val = action.val ? action.val : null;
      let newHeader = Map({type: "header", content: val, options: Map({align: "alignleft", size: action.size}) });
      return addID(action.after, state, action.prevID, action.contentID).setIn(['data', 'items', action.contentID], newHeader);
    }

    case 'DELETE_ITEM': {
      return state.updateIn(['data', 'sections'], val => val.filter(k => k !== action.itemId))
                  .updateIn(['data', 'items'], val => val.delete(action.itemId));
    }

    case 'ADD_IMG': {
      if(!action.url) return state;

      let newImg = Map({type: "img", src: action.url, imgid: action.imgid, options: Map({align: ""}) });
      return addID(action.after, state, action.prevID, action.componentId).setIn(['data', 'items', action.componentId], newImg);
    }

    case 'ADD_MEDIA': {
      let newMedia = Map({type: action.mediaType, options: Map({disp: false, src: null}) });
      return addID(action.after, state, action.prevID, action.contentID).setIn(['data', 'items', action.contentID], newMedia);
    }

    case 'ADD_YOUTUBE': {
      let newYT = Map({type: "youtube", options: Map({disp: false, src: null}) });
      return addID(action.after, state, action.prevID, action.contentID).setIn(['data', 'items', action.contentID], newYT);
    }

    case 'SET_IMG': {
      return state.setIn(['data', 'img'], action.src);
    }

    case 'SWITCH_PAGE': {
      return state.updateIn(['app', 'editor'], val => !val);
    }

    case 'OPEN_IMAGE_SELECT_PAGE': {
      return state.updateIn(['app', 'editor'], val => !val)
                  .setIn(['app', 'imgInsertId'], action.componentId)
                  .setIn(['app', 'after'], action.after);
    }

    case 'CLEAR_IMG_INSERT_ID': {
      return state.setIn(['app', 'imgInsertId'], null);
    }

    case 'SAVE_ITEM_CONTENT': {
      return state.setIn(['data', 'items', action.itemId, 'content'], action.val)
    }

    case 'FOCUS_ON_ITEM': {
      return state.setIn(['app', 'focus'], action.itemId);
    }

    case 'CLEAR_FOCUS': {
      return state.setIn(['app', 'focus'], null);
    }

    case 'CHANGE_OPTION_ALIGNMENT': {
      return state.setIn(['data', 'items', action.itemId, 'options', 'align'], action.val);
    }

    case 'CHANGE_OPTION_SIZE': {
      return state.setIn(['data', 'items', action.itemId, 'options', 'size'], action.val);
    }

    case 'CHANGE_OPTION_SRC': {
      return state.setIn(['data', 'items', action.itemId, 'options', 'src'], action.val);
    }

    default:
      return state;
  }

}
