let base = "http://localhost:5000";

function requestSignature(name, type){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `${base}/sign-s3?file-name=${name}&file-type=${type}`);

    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolve(xhr.responseText);
        }
        else{
          reject('Could not get signed url.');
        }
      }
    }
    xhr.send();
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

function confirmUpload(data){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `${base}/valid-upload?imgid=${data.imgid}`);

    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          let res = JSON.parse(xhr.responseText);
          if(res.status === 'ok')
            resolve(data);
          else
            reject('no confirmation.');
        }
        else{
          reject('Could not confirm upload.');
        }
      }
    }
    xhr.send();
  })
}


export function uploadToS3(file){
  return requestSignature(file.name, file.type)
    .then(response => {return JSON.parse(response)})
    .then((data) => {return sendFile(file, data.signedRequest, data.url, data.id)})
    .then((data) => {return confirmUpload(data)})
}
