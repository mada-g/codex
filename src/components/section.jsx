import React from 'react';

import TextBox from './textbox.jsx';
import Add from './add.jsx';

export default class Section extends React.Component{

  isInFocus = (focus) => {
    if(focus === this.props.componentId) return "inFocus";
    else return "";
  }

  render(){

    let s = {width: `${this.props.options.size}%`};

    return <div className='section' onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className={`container ${this.isInFocus(this.props.focus)}`} style={s}>
        <TextBox size="t0" componentId={this.props.componentId} txt={this.props.txt} alignment={this.props.options.align}/>
      </div>
    </div>
  }
}
