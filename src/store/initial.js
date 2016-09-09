export default {
  data: {
    title: "",
    sections : ['title'],
    items : {
      'title': {type:"text", content:"", options: {align: "aligncenter"}},
      'img' : {type:"img", src:"https://journalstore.s3.amazonaws.com/SJXQqlQo", options: {align: ""}},
      'title2': {type:"text", content:"", options: {align: "alignleft"}}
    },

    headings: [],

    img: null
  },

  app: {
    editor: true,
    imgInsertId: null,
    focus: null,
    after: 1
  }
}
