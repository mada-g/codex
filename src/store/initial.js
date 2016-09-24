/**/

export default {
  data: {
    pageid: "rkpMypz3",
    title: "New Page",
    sections : ['title', 'img', 'title2'],
    items : {
      'title': {type:"title", content:"enter title", options: {align: "aligncenter"}},
      'img' : {type:"img", content: "", src:"https://journalstore.s3.amazonaws.com/qqq_r1O6KjzT", options: {width: 350, height: 400}},
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
