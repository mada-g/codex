import fetch from 'isomorphic-fetch';
import $ from 'jquery';

export function sendPageData(){

  return fetch('/memo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      abcd: 123,
      val : "hello"
    })
  })

}


export function ajaxSendData(url, data){
  //let data = JSON.stringify({ name: "jojo", ble: "blu"});
  return new Promise((resolve, reject) => {

    $.ajax({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      url: url,
      data: data,
      timeout: 180000,
      success: function(res){
        console.log(res);
        resolve(res);
      },
      error: function(err){
        console.log("error!!")
        console.log(err);
        reject(err);
      }
    });

  })
}

export function ajaxGetData(url){
  return new Promise((resolve, reject) => {
    $.get(url, (res) => {
      resolve(res);
    })
  })
}

export function localDataSave(pageid, data){
  if(!localStorage) return;

  localStorage.setItem('pageData'+pageid, JSON.stringify(data));
  console.log('local save!');
}

export function loadLocalData(pageid){
  if(!localStorage) return null;

  let pageData = localStorage.getItem('pageData'+pageid);

  if(pageData === null || pageData === undefined) return null;

  return JSON.parse(pageData);
}

export function deleteLocalData(pageid){
  if(!localStorage) return null;
  localStorage.removeItem('pageData'+pageid);
  return true;
}
