import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';

import * as actions from '../store/actions/index.js';

import ToolboxText from './toolboxText.jsx';


class Toolbar extends React.Component{

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

  renderTextTools = (focus, options) => {
    return [
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

    if(item.type === 'text'){
      return this.renderTextTools(focus, item.options);
    }
    else if(item.type === "header"){
      return this.renderHeadingTools(focus, item.options);
    }
    else return null;
  }

  renderPageButton = (label, src, btnClick) => {
    return <div className="toolbox page-toolbox">
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
      this.renderPageButton('save', 'upload.png', null),
      this.renderPageButton('preview', 'eye.png', this.props.newPage),
      this.renderPageButton('publish', 'newspaper.png', null)
    ]
  }

  render(){
    return <div className="toolbar">

      <div className="tool-sect page-tools">
        <div className="toolbox">
          <div className="toolbox-box app-title">codex</div>
        </div>
        {this.renderPageTools()}
      </div>

      <div className="tool-sect item-tools">

        {this.renderToolBoxes(this.props.app.focus)}

        <div className="toolbox btn-del" onClick={this.props.deleteItemInFocus}>
          <span className="abs all-center">delete item</span>
        </div>

      </div>

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
