import React from 'react';

import TextBox from './textbox.jsx';
import Add from './add.jsx';

export default class Title extends React.Component{

  isInFocus = (focus) => {
    if(focus === this.props.componentId) return "inFocus";
    else return "";
  }

  render(){
    return <div className="title" onClick={this.props.handleClick} onFocus={this.props.handleClick}>
      <div className={`container ${this.isInFocus(this.props.focus)}`}>
        <TextBox size="hx" componentId={this.props.componentId} txt={this.props.txt} alignment={this.props.options.align}/>
      </div>
    </div>
  }
}
