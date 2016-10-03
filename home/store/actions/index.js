import {List, Map, fromJS, toJS} from 'immutable';

import {ajaxSendData, ajaxGetData} from '../../../shared/utils/ajaxUtils.js';

export function createPage(){
  return function(dispatch){
    let data = {title: "My New Adventure"};
    return ajaxSendData('/codex/create', JSON.stringify(data));
  }
}


export function removePageInfo(pageid){
  return {
    type: "REMOVE_PAGE_INFO",
    pageid: pageid
  }
}

export function deletePageInProg(){
  return {
    type: "DELETE_PAGE_IN_PROG"
  }
}

export function deletePageEnd(){
  return {
    type: "DELETE_PAGE_END"
  }
}

export function deletePage(pageid){
  return function(dispatch, getState){
    let data = {pageid: pageid}
    dispatch(deletePageInProg());
    return ajaxGetData(`/codex/delete-page?pageid=${pageid}`).then((res) => {
      dispatch(deletePageEnd());
      if(res.status){
        return dispatch(removePageInfo(pageid));
      }
      return res;
    }).catch((err) => {
      return dispatch(deletePageEnd());
    });
  }
}
