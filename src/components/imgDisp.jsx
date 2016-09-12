import React from 'react';

import FileUpload from './fileUpload.jsx';

export default class ImgDisp extends React.Component{

  render(){
    console.log("SRC: " + this.props.src);
    let options = this.props.options;
    let dimenClass = (options.width > options.height) ? 'bigWidth' : 'bigHeight';

    return <div className={`imgDisp ${this.props.componentId}`} onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className={`img-container ${dimenClass}`}>
        {this.props.src ? <img src={this.props.src} className={`${dimenClass}`}/> : null}
      </div>
    </div>
  }
}
