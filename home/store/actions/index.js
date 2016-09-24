import {List, Map, fromJS, toJS} from 'immutable';

import {ajaxSendData, ajaxGetData} from '../../../shared/utils/ajaxUtils.js';

export function createPage(){
  return function(dispatch){
    let data = {title: "My New Adventure"};
    return ajaxSendData('/create', JSON.stringify(data));
  }
}


export function removePageInfo(pageid){
  return {
    type: "REMOVE_PAGE_INFO",
    pageid: pageid
  }
}

export function deletePage(pageid){
  return function(dispatch, getState){
    let data = {pageid: pageid}
    return ajaxGetData(`/delete-page?pageid=${pageid}`).then((res) => {
      if(res.status){
        console.log('OK!');
        return dispatch(removePageInfo(pageid));
      }

      return res;
    });
  }
}
