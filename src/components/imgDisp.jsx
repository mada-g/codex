import React from 'react';

import FileUpload from './fileUpload.jsx';

export default class ImgDisp extends React.Component{

  render(){
    console.log("SRC: " + this.props.src);
    return <div className={`imgDisp ${this.props.componentId}`} onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className="content">
        <div className="img-container">
          {this.props.src ? <img src={this.props.src} /> : null}
        </div>
        <div className="subtitle">
        </div>
      </div>
    </div>
  }
}
