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
    console.log("SRC: " + this.props.src);
    let options = this.props.options;
    //let dimenClass = (options.width >= options.height) ? 'bigWidth' : 'bigHeight';

    let dimenClass = null;
    let s = null;

    if(options.width >= options.height){
      dimenClass = "bigWidth";
      s = null;
    }
    else{
      dimenClass = "";
      s = {width: `${80*options.width/options.height}%`, height:"auto"}
    }

    return <div className={`imgDisp ${this.props.componentId} ${this.isInFocus(this.props.focus)}`} onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className={`img-container ${dimenClass}`}>
        {this.props.src ? <img src={this.props.src} style={s} className={`${dimenClass}`}/> : null}
      </div>

      <div className="img-label">
        <div contentEditable className="textbox-content"></div>
      </div>

    </div>
  }
}
