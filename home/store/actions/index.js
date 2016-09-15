import {List, Map, fromJS, toJS} from 'immutable';

import {ajaxSendData} from '../../../shared/utils/ajaxUtils.js';

export function createPage(){
  return function(dispatch){
    let data = {title: "My New Adventure"};
    return ajaxSendData('/create', JSON.stringify(data));
  }
}
