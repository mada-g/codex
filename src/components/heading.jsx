import React from 'react';

import TextBox from './textbox.jsx';
import Add from './add.jsx';

export default class Heading extends React.Component{

  render(){
    let level = this.props.options.level;
    return <div className="heading" onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className="content">
        <div>{this.props.componentId}</div>
        <div>
          <span>{`${level['l1']}.${level['l2']}.${level['l3']}`}</span>
        </div>
        <TextBox size={this.props.options.size} componentId={this.props.componentId} txt={this.props.txt} alignment={this.props.options.align} />
      </div>
    </div>
  }
}
