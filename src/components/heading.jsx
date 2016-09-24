import React from 'react';
import romanNum from 'roman-numerals';
import $ from 'jquery';

import TextBox from './textbox.jsx';
import Add from './add.jsx';

export default class Heading extends React.Component{

  componentDidMount(){
    $(`.${this.props.componentId} .textbox-content`).html(this.props.txt);
  }

  isInFocus = (focus) => {
    if(focus === this.props.componentId) return "inFocus";
    else return "";
  }

  formatLabel = (l, numbering) => {
    if(numbering === "none") return "";

    let t = "";

    for(let i in l){
      let num = l[i];
      if(l[i] !== 0){
        if(i>0) t += '.';
        if(numbering==="roman"){
          num = romanNum.toRoman(l[i]);
        }
        t += " " + num;
      }
    }

    return t;
  }

  renderLabel = (options, numbering) => {

    if(options.align === 'alignleft' || options.align === "alignright"){
      return <div className="inline-block heading-label">
        <div className="heading-level">
          <span>
            {this.formatLabel(options.level, numbering)}
          </span>
        </div>
      </div>
    }

    if(options.align === 'aligncenter'){
      return <div className="heading-label-center">
        {this.formatLabel(options.level, numbering)}
      </div>
    }
/*
    return <div className="heading-label">
      <div className="heading-level">
        {this.formatLabel(options.level)}
      </div>
    </div>*/
  }
/*
  render(){
    let level = this.props.options.level;
    return <div className="heading" onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className="content">

        {this.renderLabel(this.props.options)}

        <div className="heading-text">

          <TextBox label={this.formatLabel(level)} size={this.props.options.size} componentId={this.props.componentId} txt={this.props.txt} alignment={this.props.options.align} />

      </div>
      </div>
    </div>
  }
*/
  render(){
    let numbering = this.props.numbering;
    return <div className="heading" onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className={`content ${this.props.componentId} ${this.props.options.size} ${this.props.options.align} ${this.isInFocus(this.props.focus)}`}>
        {this.renderLabel(this.props.options, numbering)}
        <div className={`headingInput`}>
          <div contentEditable className="textbox-content">title</div>
        </div>
      </div>
    </div>
  }
}
