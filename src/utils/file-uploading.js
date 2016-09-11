import $ from 'jquery';

//let base = "http://localhost:3000";

function requestSignature(name, type, dimen, pageid){
  return new Promise((resolve, reject) => {

    $.ajax({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      url: `/sign-s3`,
      data: JSON.stringify({
        filename: name,
        filetype: type,
        dimen: dimen,
        pageid: pageid
      }),
      success: function(res){
        resolve(res);
      }
    });

  })
}


function sendFile(file, req, url, id){
  return new Promise((resolve, reject)=>{
    var xhr = new XMLHttpRequest();

    xhr.open('PUT', req);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolve({url:url, imgid:id});
        }
        else{
          reject('Could not upload file.');
        }
      }
    }
    xhr.send(file);
  })
}


function confirmUpload(data, pageid){
  return new Promise((resolve, reject) => {
    $.get(`/valid-upload?imgid=${data.imgid}&pageid=${pageid}`, (res) => {
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
      console.log(res);
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
      resolve(data);
    });
  })
}


export function uploadToS3(file, dimen, pageid){
  console.log('uploading...');
  return requestSignature(file.name, file.type, dimen, pageid)
    //.then(response => {return JSON.parse(response)})
    .then((data) => {return sendFile(file, data.signedRequest, data.url, data.id)})
    .then((data) => {return confirmUpload(data, pageid)})
}
