import {List, Map, fromJS, toJS} from 'immutable';

import {uploadToS3} from '../../utils/file-uploading.js';
import {sendPageData, ajaxSendData} from '../../utils/saveData.js';

export function addItem(after, label, prevID, contentID, data){
  return function(dispatch){
    if(label === "text"){
      dispatch(addText(after, "ttt", prevID, contentID));
    }
    else if(label === "heading"){
      dispatch(addHeader(after, "", "h0", prevID, contentID));
    }
    else if(label === "image"){
      dispatch(addImg(after, data.url, data.imgid, prevID, contentID))
    }
    else if(label === "codepen" || label === "youtube"){
      dispatch(addMedia(after, prevID, contentID, label));
    }
  }
}

export function addMedia(after, prevID, contentID, label){
  return {
    type: "ADD_MEDIA",
    prevID,
    contentID,
    after,
    mediaType: label
  }
}

export function addYoutube(after, prevID, contentID){
  return {
    type: "ADD_YOUTUBE",
    prevID,
    contentID,
    after
  }
}

export function addText(after, txt, prevID, contentID){
  return {
    type: "NEW_TEXT",
    val: txt,
    prevID,
    contentID,
    after
  }
}

export function addHeader(after, txt, size, prevID, contentID){
  return {
    type: "NEW_HEADER",
    val: txt,
    size,
    prevID,
    contentID,
    after
  }
}


export function setImg(src){
  return {
    type: "SET_IMG",
    src
  }
}

export function addImg(after, url, imgid, prevID, componentId){
  return {
    type: "ADD_IMG",
    url,
    imgid,
    prevID,
    componentId,
    after
  }
}

export function selectImg(file, after, prevID, componentId){
  return function(dispatch){
    return uploadToS3(file).then((data) => {
      console.log("url: " + data.url);
      dispatch(addImg(after, data.url, data.imgid, prevID, componentId));
      return dispatch(clearImgInsertId());
    })
  }
}

export function uploadFile(file){
  return function(dispatch){

    return uploadToS3(file).then((id)=>{console.log('valid!'); console.log(id)})

    /*.then((url) => {
      console.log(url);
      return dispatch(setImg(url));
    });*/

  }
}

export function openImgSelectPage(componentId, after){
  return {
    type: "OPEN_IMAGE_SELECT_PAGE",
    componentId,
    after
  }
}

export function clearImgInsertId(){
  return {
    type: "CLEAR_IMG_INSERT_ID"
  }
}

export function switchPage(){
  return {
    type: "SWITCH_PAGE",
  }
}

export function saveItemContent(itemId, val){
  return {
    type: "SAVE_ITEM_CONTENT",
    itemId,
    val
  }
}

export function focusOnItem(itemId){
  return {
    type: "FOCUS_ON_ITEM",
    itemId
  }
}

export function clearFocus(){
  return {
    type: "CLEAR_FOCUS"
  }
}

export function deleteItem(itemId){
  return {
    type: "DELETE_ITEM",
    itemId
  }
}

export function deleteItemInFocus(){
  return function(dispatch, getState){
    let itemInFocus = getState().getIn(['app', 'focus']);
    if(!itemInFocus) return;

    dispatch(clearFocus());
    dispatch(deleteItem(itemInFocus));
  }
}

export function change_OPTION_alignment(itemId, align){
  return {
    type: "CHANGE_OPTION_ALIGNMENT",
    itemId,
    val: align
  }
}

export function change_OPTION_size(itemId, size){
  return {
    type: "CHANGE_OPTION_SIZE",
    itemId,
    val: size
  }
}

export function change_OPTION_src(itemId, src){
  return {
    type: "CHANGE_OPTION_SRC",
    itemId,
    val: src
  }
}

export function newPage(){
  return function(dispatch){
    let data = {title: "My New Adventure"};
    ajaxSendData('/create', JSON.stringify(data)).then(() => console.log('OK!'));
  }
}

export function saveData(){
  return function(dispatch, getState){
    let data = getState().get('data').toJS();
    console.log('packing data...');
    console.log(data);
    ajaxSendData('/save', JSON.stringify(data)).then(console.log);
  }
}
