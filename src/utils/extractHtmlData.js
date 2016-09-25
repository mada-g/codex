import $ from 'jquery';

export default function(sections, save){

//  console.log('extracting content...');

  sections.forEach((item) => {
    let txt = $(`.${item} .textbox-content`).html();
  //  console.log(txt);
    if(txt) save(item, txt);
  })

  //console.log('content extracted!');
}
