import fetch from 'isomorphic-fetch';
import $ from 'jquery';


let extractIdFromUrl = (src, match, end) => {
  if(!src) throw 'error no source';
  let index = src.indexOf(match);
  if(index === -1) throw 'error no match';


  let indexEnd = src.length;

  if(end){
    indexEnd = src.indexOf(end);
    if(indexEnd === -1) throw 'error no match';
  }

  return src.substring(index + match.length, indexEnd);
}

export default function(src){


  return new Promise((resolve, reject) => {

    let tweetId = "";
    let tweetUser = "";

    try{
      tweetId = extractIdFromUrl(src, 'status/', false);
      tweetUser = extractIdFromUrl(src, 'twitter.com/', '/status');

      console.log(tweetId);
      console.log(tweetUser);
    } catch (e) {
      console.log(e);
      return reject(e);
    }

    let fetchUrl = "https://api.twitter.com/1.1/statuses/oembed.json?id=" + tweetId;
    //let fetchUrl = "https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2F" + tweetUser + '%2Fstatus%2F' + tweetId;

    console.log(fetchUrl);

    $.getJSON(fetchUrl, (res) => {
      console.log(res);
    })

    /*return fetch(fetchUrl).then((res) => {
      console.log(JSON.parse(res));
      resolve(res);
    }).catch((e) => {console.log(e); reject(e)});*/

  })
}
