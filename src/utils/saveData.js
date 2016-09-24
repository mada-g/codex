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
  console.log('SAVING ITEMs::::::::::::::::::::::::::::::::::::::::::::::');
  console.log(data.items);
  console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');

  localStorage.setItem('pageData'+pageid, JSON.stringify(data));
  console.log('local save!');
}

export function loadLocalData(pageid){
  let pageData = localStorage.getItem('pageData'+pageid);

  if(pageData) pageData = JSON.parse(pageData);

  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");
  console.log(pageData.items);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5");

  return pageData;
}
