import React from 'react';
import $ from 'jquery';

import FileUpload from './fileUpload.jsx';

export default class ImgDisp extends React.Component{

  /*

    h/w

  */
  componentDidMount(){
    $(`.${this.props.componentId} .textbox-content`).html(this.props.txt);
  }

  isInFocus = (focus) => {
    if(focus === this.props.componentId) return "inFocus";
    else return "";
  }

  render(){
    let options = this.props.options;
    //let dimenClass = (options.width >= options.height) ? 'bigWidth' : 'bigHeight';

    let dimenClass = null;
    let s = null;

    /*if(options.width >= options.height){
      dimenClass = "bigWidth";
      s = {width: `100%`, height:"auto"}
    }
    else{
      dimenClass = "";
      s = {width: `${80*Math.round(options.width/options.height)}%`, height:"auto"}
    }*/

    s = {width: `${options.size}%`, height:"auto"}

    return <div className={`imgDisp ${this.props.componentId} ${this.isInFocus(this.props.focus)}`} onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className={`img-container`}>
        {this.props.src ? <img src={this.props.src} style={s}/> : null}
        <div className={`img-label-container ${this.props.options.align}`}>
          <div className="img-label" style={s}><div contentEditable className="textbox-content"></div></div>
        </div>
      </div>


    </div>
  }
}
