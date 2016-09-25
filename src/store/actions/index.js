import {List, Map, fromJS, toJS} from 'immutable';
import $ from 'jquery';

import {uploadToS3} from '../../utils/file-uploading.js';
import {sendPageData, ajaxSendData, ajaxGetData} from '../../utils/saveData.js';
import extractHtmlData from '../../utils/extractHtmlData.js'
import {localDataSave, loadLocalData} from '../../utils/saveData.js'


export function addItem(after, label, prevID, contentID, data){
  return function(dispatch){
    dispatch(setLocalSaving(false));

    if(label === "text"){
      dispatch(addText(after, "", prevID, contentID));
    }
    else if(label === "heading"){
      dispatch(insertHeader(after, "", "h0", prevID, contentID));
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


export function insertHeader(after, txt, size, prevID, contentID){
  return function(dispatch, getState){
    dispatch(addHeader(after, txt, size, prevID, contentID));
    dispatch(computeHeadingLevels());
    console.log(getState().toJS())
  }
}

export function deleteHeading(itemId){
  return {
    type: 'DELETE_HEADING',
    itemId
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

export function computeHeadingLevels(){
  return {
    type: "COMPUTE_HEADING_LEVELS"
  }
}

export function setImg(src){
  return {
    type: "SET_IMG",
    src
  }
}

export function addImg(after, data, prevID, componentId){
  return {
    type: "ADD_IMG",
    url: data.url,
    imgid: data.imgid,
    dimen: data.dimen,
    prevID,
    componentId,
    after
  }
}

export function selectImg(file, dimen, after, prevID, componentId){
  return function(dispatch, getState){
    const pageid = getState().getIn(['data', 'pageid']);

    return uploadToS3(file, dimen, pageid).then((data) => {
      console.log("url: " + data.url);
      console.log("dimen valid: " + data.dimen)
      dispatch(setLocalSaving(false));
      dispatch(addImg(after, data, prevID, componentId));
      dispatch(closeImgSelectPage());
      return dispatch(clearImgInsertId());
    })
  }
}


export function imgUpload_START(){
  return {
    type: 'IMG_UPLOAD_START'
  }
}

export function imgUpload_END(){
  return {
    type: 'IMG_UPLOAD_END'
  }
}

export function deleteImage(imgid){
  if(!imgid) return;
  return function(dispatch, getState){
    const pageid = getState().getIn(['data', 'pageid']);

    return ajaxGetData(`/delete-image?pageid=${pageid}&imgid=${imgid}`).then(JSON.parse).then((res) => {
      if(res.status) dispatch(fetchImgsData());
      return res.status;
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

export function closeImgSelectPage(){
  return {
    type: "CLOSE_IMG_SELECT_PAGE"
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
    dispatch(setLocalSaving(false));
    let itemInFocus = getState().getIn(['app', 'focus']);
    if(!itemInFocus) return;
    console.log('item in focus: ' + itemInFocus);

    let type = getState().getIn(['data', 'items', itemInFocus, 'type']);
    if(type === 'header'){
      console.log(itemInFocus)
      dispatch(deleteHeading(itemInFocus));
      dispatch(computeHeadingLevels());
    }

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

export function change_heading_size(itemId, size){
  return {
    type: "CHANGE_OPTION_SIZE",
    itemId,
    val: size
  }
}

export function change_OPTION_size(itemId, size){
  return function(dispatch){
    dispatch(change_heading_size(itemId, size));
    dispatch(computeHeadingLevels());
  }
}

export function change_OPTION_src(itemId, src){
  return {
    type: "CHANGE_OPTION_SRC",
    itemId,
    val: src
  }
}

export function change_OPTION_numbering(val){
  return {
    type: "CHANGE_OPTION_NUMBERING",
    val
  }
}

export function selectImgFromBank(data, after, prevID, componentId){
  return function(dispatch){
    dispatch(setLocalSaving(false));
    dispatch(closeImgSelectPage());
    dispatch(addImg(after, data, prevID, componentId))
    dispatch(clearImgInsertId());
  }
}

export function setImgBank(val){
  return {
    type: 'SET_IMG_BANK',
    val
  }
}

export function imgResize(itemId, val){
  let _val = Math.round(val);
  _val = _val > 0 ? _val : 0;
  _val = _val < 100 ? _val : 100;

  return {
    type: 'CHANGE_OPTION_IMG_SIZE',
    itemId,
    val: _val
  }
}

export function saveTitle(){

  let val = $('.title .textbox-content').text();

  return {
    type: 'SAVE_TITLE',
    val
  }
}

export function newPage(){
  return function(dispatch){
    let data = {title: "My New Adventure"};
    ajaxSendData('/create', JSON.stringify(data)).then(() => console.log('OK!'));
  }
}


export function saving_START(){
  return {
    type: 'SAVING_START'
  }
}

export function saving_END(){
  return {
    type: 'SAVING_END'
  }
}

export function saveData(){
  return function(dispatch, getState){
    if(getState().getIn(['app', 'saving'])) return;

    dispatch(saveTitle());
    let data = getState().get('data').toJS();
    console.log('packing data...');
  //  console.log(data);
    dispatch(saving_START());

    return ajaxSendData('/save', JSON.stringify(data)).then((res) => {
      console.log("saved: " + res.status);
      dispatch(saving_END());
      return true;
    }).catch((err) => {
      console.log('caught error!');
      dispatch(saving_END());
      return false;
    });

  }
}

export function setLocalDataToken(val){
  return {
    type: 'LOCAL_DATA_TOKEN',
    val
  }
}

export function publish(){
  return {
    type: 'PUBLISH'
  }
}

export function setPageData(data){
  console.log('data:::');
  console.log(data);

  if(data === null) return;

  return {
    type: "SET_PAGE_DATA",
    val: data
  }
}



export function fetchImgsData(){
  return function(dispatch, getState){
    const pageid = getState().getIn(['data', 'pageid']);

    return ajaxGetData('/pageimgs?pageid='+pageid).then((res) => {
      console.log(res);
      if(res && res.status && res.imgsData){
        console.log(res.imgsData);
        return dispatch(setImgBank(res.imgsData));
      }
    })

  }
}

export function fetchTweet(){
  return function(dispatch){

  }
}

export function setLocalSaving(val){
  return {
    type: 'SET_LOCAL_SAVING',
    val
  }
}

export function setLocalStorage(){
  return function(dispatch, getState){
    let _state = getState().toJS();
    localDataSave(_state.data.pageid, _state.data);
  }
}

export function localSave(_sections){
  return function(dispatch, getState){
    let _state = getState().toJS();
    localDataSave(_state.data.pageid, _state.data);
    dispatch(setLocalSaving(true));
  }
}

export function setLocalSaveInProg(val){
  return {
    type: 'LOCAL_SAVE_IN_PROG',
    val
  }
}
