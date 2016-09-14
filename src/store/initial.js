/**/

export default {
  data: {
    pageid: "rkpMypz3",
    title: "New Page",
    sections : ['title', 'img', 'title2'],
    items : {
      'title': {type:"text", content:"", options: {align: "aligncenter"}},
      'img' : {type:"img", src:"https://journalstore.s3.amazonaws.com/aaa_ByHMue7n", options: {width: 350, height: 400}},
      'title2': {type:"text", content:"", options: {align: "alignleft"}}
    },

    headings: [],
    headingNumbering: "standard",

    imgsData: [],
    published: false

  },

  app: {
    editor: true,
    imgInsertId: null,
    focus: null,
    after: 1
  }
}
