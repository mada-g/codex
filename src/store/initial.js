/*{
  imgid: "mountain_night",
  name: "mountain_night",
  type: "jpg",
  dimen: {
    width: 350,
    height: 150
  },
  url: "https://s3-ap-southeast-1.amazonaws.com/journalstore/mountain_night.jpg",
  submit: 'ok',
  uploaded: true
},
{
  imgid: "saints",
  name: "saints",
  type: "jpg",
  dimen: {
    width: 350,
    height: 350
  },
  url: "https://s3-ap-southeast-1.amazonaws.com/journalstore/saints.png",
  submit: 'ok',
  uploaded: true
},
{
  imgid: "sotonold",
  name: "sotonold",
  dimen: {
    width: 350,
    height: 300
  },
  type: "jpg",
  url: "https://s3-ap-southeast-1.amazonaws.com/journalstore/sotonold.jpg",
  submit: 'ok',
  uploaded: true
},
{
  imgid: "train",
  name: "train",
  dimen: {
    width: 150,
    height: 450
  },
  type: "png",
  url: "https://s3-ap-southeast-1.amazonaws.com/journalstore/train_cross.png",
  submit: 'ok',
  uploaded: true
},*/

export default {
  data: {
    pageid: "rkpMypz3",
    title: "",
    sections : ['title'],
    items : {
      'title': {type:"text", content:"", options: {align: "aligncenter"}},
      'img' : {type:"img", src:"https://journalstore.s3.amazonaws.com/SJXQqlQo", options: {align: ""}},
      'title2': {type:"text", content:"", options: {align: "alignleft"}}
    },

    headings: [],
    headingNumbering: "standard",

    imgsData: [],

    img: null
  },

  app: {
    editor: true,
    imgInsertId: null,
    focus: null,
    after: 1
  }
}
