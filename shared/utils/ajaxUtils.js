import $ from 'jquery';

export function ajaxSendData(url, data){
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

export function ajaxGetData(url){
  return new Promise((resolve, reject) => {
    $.get(url, (res) => {
      resolve(res);
    })
  })
}
