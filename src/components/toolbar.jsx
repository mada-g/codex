import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';
import $ from 'jquery';

import * as actions from '../store/actions/index.js';

import extractHtmlData from '../utils/extractHtmlData.js';
import {localDataSave, loadLocalData, deleteLocalData} from '../utils/saveData.js';

import ToolboxText from './toolboxText.jsx';
import ToolboxImgSize from './toolboxImgSize.jsx';

class Toolbar extends React.Component{

  constructor(){
    super();
    this.state = {
      btnsave: "",
      btnpreview: "",
      btnpublish: ""
    }
  }

  savePage = (label) => {
    return () => {
      extractHtmlData(this.props.data.sections, this.props.saveItemContent);

      $(`.btn-${label}`).removeClass('save-success');
      $(`.btn-${label}`).removeClass('save-fail');
      $(`.btn-${label}`).addClass('saving');

      this.props.saveData().then((res) => {
        $(`.btn-${label}`).removeClass('saving');

        if(res) $(`.btn-${label}`).addClass('save-success');
        else $(`.btn-${label}`).addClass('save-fail');
      })
    }
  }

  publishPage = () => {
    this.props.publish();
    this.savePage('publish')();
  }

  previewPage = () => {
    //window.location = `/preview/${this.props.data.pageid}`;
    extractHtmlData(this.props.data.sections, this.props.saveItemContent);
    this.props.saveData().then((res) => {
      if(res){
        let win = window.open(`/preview/${this.props.data.pageid}`);
        if(win) win.focus();
        else window.location = `/preview/${this.props.data.pageid}`;
      }
    })

  }

  restoreLocalData = () => {
    console.log('restoring...');
    this.props.setPageData(loadLocalData(this.props.data.pageid));

    console.log("THE TITLE::::: " + this.props.data.items.title.content);

    deleteLocalData(this.props.data.pageid);

    this.props.setLocalDataToken(false);
  }

  localSave = () => {
    //this.props.localSave(this.props.data.sections);
    console.log('local save...');
    extractHtmlData(this.props.data.sections, this.props.saveItemContent);
    this.props.localSave();
    //localDataSave(this.props.data.pageid, this.props.data);
  }

  homeClick = () => {
    this.localSave();
    window.location = "/editor";
  }

  renderRestorePage = () => {
    if(this.props.app.hasLocalData){
      return <div className="restore-page">
        <div className="container">
          <div className="close-restore-page" onClick={()=>{this.props.setLocalDataToken(false)}}><img src="/assets/icons/closegw.png"/></div>
          <div className="restore-page-Q">restore unsaved data?</div>
          <div className="restore-page-A"><div onClick={this.restoreLocalData}>restore</div></div>
        </div>
      </div>
    }
    else return null;
  }

  changeAlign = (focus, val) => {
    return () => {
      console.log(val);
      this.props.change_OPTION_alignment(focus, val);
    }
  }

  changeSize = (focus, val) => {
    return () => {
      console.log("new size: "+ val);
      this.props.change_OPTION_size(focus, val);
    }
  }

  changeNumbering = (val) => {
    return () => {
      this.props.change_OPTION_numbering(val);
    }
  }

  renderAlignTools = (focus, align) => {

    let alignment = [{label: '', src: 'alignleft_w', selectedSrc: 'alignleft', selected: (align === 'alignleft'), handleClick: this.changeAlign(focus, 'alignleft')},
                     {label: '', src: 'aligncenter_w', selectedSrc: 'aligncenter', selected: (align === 'aligncenter'), handleClick: this.changeAlign(focus, 'aligncenter')},
                     {label: '', src: 'alignright_w', selectedSrc: 'alignright', selected: (align === 'alignright'), handleClick: this.changeAlign(focus, 'alignright')}];

    return <ToolboxText title="alignment" btns={alignment} btnStyle="" />
  }

  renderHeadingStyling = (focus, numbering) => {
    let styling = [
      {label: 'roman', src: null, selected: (numbering === "roman"), handleClick: this.changeNumbering('roman')},
      {label: 'standard', src: null, selected: (numbering === "standard"), handleClick: this.changeNumbering('standard')},
      {label: 'none', src: null, selected: (numbering === "none"), handleClick: this.changeNumbering('none')}
    ];

    return <ToolboxText title="heading style" btns={styling} btnStyle="heading-style-btn" />
  }

  renderHeadingSize = (focus, size) => {
    console.log("size " + size);
    let sizes = [{label: 'I', src: null, selected: (size==="h0"), handleClick: this.changeSize(focus, "h0") },
                 {label: 'I.1', src: null, selected: (size==="h1"), handleClick: this.changeSize(focus, "h1") },
                 {label: 'I.1.ii', src: null, selected: (size==="h2"), handleClick: this.changeSize(focus, "h2") }];

    return <ToolboxText title="heading level" btns={sizes} btnStyle="heading-size-btn" />
  }

  renderImgSize = (focus, size) => {
    return <ToolboxImgSize focus={focus} imgResize={this.props.imgResize} size={size}/>
  }

  renderTextTools = (focus, options) => {
    return [
      this.renderImgSize(focus, options.size),
      this.renderAlignTools(focus, options.align)
    ]
  }

  renderImgTools = (focus, options) => {
    return [
      this.renderImgSize(focus, options.size),
      this.renderAlignTools(focus, options.align)
    ]
  }

  renderHeadingTools = (focus, options) => {
    return [
      this.renderHeadingStyling(focus, this.props.data.headingNumbering),
      this.renderHeadingSize(focus, options.size),
      this.renderAlignTools(focus, options.align)
    ]
  }

  renderToolBoxes = (focus) => {
    if(!focus) return null;

    let item = this.props.data.items[focus];

    if(item.type === 'text' || item.type === 'title'){
      return this.renderTextTools(focus, item.options);
    }
    else if(item.type === 'img'){
      return this.renderImgTools(focus, item.options);
    }
    else if(item.type === "header"){
      return this.renderHeadingTools(focus, item.options);
    }
    else return null;
  }

  renderPageButton = (label, src, btnClick) => {
    return <div className={`toolbox page-toolbox btn-${label}`}>
      <div className="toolbox-box">
        <div className="tool-title">
          {label}
        </div>
        <div className="img-container" onClick={btnClick}>
          <img src={`/assets/icons/${src}`}/>
        </div>
      </div>
    </div>
  }

  renderPageTools = () => {
    return [
      this.renderPageButton('save', 'upload.png', this.savePage('save')),
      this.renderPageButton('preview', 'eye.png', this.previewPage),
      this.renderPageButton('publish', 'newspaper.png', this.publishPage)
    ]
  }

  render(){
    return <div className="toolbar">

      <div className="tool-sect page-tools">
        <div className="toolbox">
          <div className="toolbox-box app-title" onClick={this.homeClick}>codex</div>
        </div>
        {this.renderPageTools()}
      </div>

      <div className="tool-sect item-tools">

        {this.renderToolBoxes(this.props.app.focus)}

        {(this.props.app.editor && this.props.app.focus !== 'title') ? <div className="toolbox btn-del" onClick={this.props.deleteItemInFocus}>
          <span className="abs all-center">delete item</span>
        </div> : null}

      </div>

      {this.renderRestorePage()}

    </div>
  }
}

/*<div className="tool-section">
  {this.renderToolBoxes(this.props.app.focus)}
</div>
<div className="tool-section button-container" onClick={this.props.deleteItemInFocus}>
  <div className="button-box abs vert-center">
    <div className="button-label">Delete</div>
  </div>
</div>
</div>*/

function injectState(state){
  return {
    data: state.get('data').toJS(),
    app: state.get('app').toJS()
  }
}

export default connect(injectState, actions)(Toolbar);
