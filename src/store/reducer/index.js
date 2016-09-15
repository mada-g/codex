import {List, Map, fromJS, toJS} from 'immutable';

const INIT_STATE = Map();

function addID(offset, state, prevID, id){
  let at = state.getIn(['data', 'sections']).findKey(function(n){return n===prevID}) + offset;
  return state.updateIn(['data', 'sections'], val => val.insert(at, id));
}

function addHeadingID(state, closestHeading, id){
  let at = 0;
  if(closestHeading){
    at = state.getIn(['data', 'headings']).findKey(function(n){return n===closestHeading}) + 1;
  }
  return state.updateIn(['data', 'headings'], val => val.insert(at, id));
}

function findClosestHeading(state, prevID, after){
  var sections = state.getIn(['data', 'sections']).toJS();

  var closest = null;
  for(let i=0; i<sections.length; i++){

    if(after===0 && sections[i] === prevID) return closest;
    if(state.getIn(['data', 'items', sections[i], 'type']) === 'header'){
      closest = sections[i];
    }
    if(sections[i] === prevID) return closest;
  }
  return closest;
}

export default function(state = INIT_STATE, action){

  switch (action.type) {

    case 'NEW_TEXT': {
      let val = action.val ? action.val : null;
      let newText = Map({type: "text", content: val, options: Map({align: "alignleft"}) });
      return addID(action.after, state, action.prevID, action.contentID).setIn(['data', 'items', action.contentID], newText);
    }

    case 'NEW_HEADER': {
      let val = action.val ? action.val : "title";

      let closestHeading = findClosestHeading(state, action.prevID, action.after);

      let newHeader = Map({type: "header", content: val, options: Map({align: "alignleft", size: action.size, level: null}) });
      let newState = addID(action.after, state, action.prevID, action.contentID)
      return addHeadingID(newState, closestHeading, action.contentID)
              .setIn(['data', 'items', action.contentID], newHeader);
    }

    case 'COMPUTE_HEADING_LEVELS': {
      let newState = state;
      let headings = state.getIn(['data', 'headings']).toJS();
      var l1 = 0, l2 = 0, l3 = 0;


      for(let i=0; i<headings.length; i++){
        let size = state.getIn(['data', 'items', headings[i], 'options', 'size']);
        if(size === 'h2') {
          l3++;
          if(l1===0) l1=1;
          if(l2===0) l2=1;
        }
        else if(size === 'h1') {
          l2++;
          l3=0;
          if(l1===0) l1=1;
        }
        else {
          l1++;
          l2=0;
          l3=0;
        }

        newState = newState.setIn(['data', 'items', headings[i], 'options', 'level'], List([l1,l2,l3]))
      }

      return newState;
    }

    case 'DELETE_ITEM': {
      if(action.itemId === 'title') return state;
      return state.updateIn(['data', 'sections'], val => val.filter(k => k !== action.itemId))
                  .updateIn(['data', 'items'], val => val.delete(action.itemId));
    }

    case 'DELETE_HEADING': {
      return state.updateIn(['data', 'headings'], val => val.filter(k => k !== action.itemId));
    }

    case 'ADD_IMG': {
      if(!action.url || !action.dimen) return state;

      let newImg = Map({type: "img", src: action.url, imgid: action.imgid, options: Map({width: action.dimen.width, height: action.dimen.height}) });
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

    case 'SET_IMG_BANK': {
      return state.setIn(['data', 'imgsData'], action.val);
    }

    case 'OPEN_IMAGE_SELECT_PAGE': {
      return state.setIn(['app', 'editor'], false)
                  .setIn(['app', 'imgInsertId'], action.componentId)
                  .setIn(['app', 'after'], action.after)
                  .setIn(['app', 'focus'], null);
    }

    case 'CLOSE_IMG_SELECT_PAGE': {
      return state.setIn(['app', 'editor'], true)
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

    case 'SAVE_TITLE': {
      return state.setIn(['data', 'title'], action.val);
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

    case 'CHANGE_OPTION_NUMBERING': {
      return state.setIn(['data', 'headingNumbering'], action.val);
    }

    default:
      return state;
  }

}
