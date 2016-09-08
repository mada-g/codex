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
      success: function(res){
        resolve(res);
      }
    });

  })
}
