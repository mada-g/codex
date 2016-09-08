import React from 'react';

import TextBox from './textbox.jsx';
import Add from './add.jsx';

export default class Heading extends React.Component{

  render(){
    return <div className="heading" onClick={this.props.handleClick} onFocus={this.props.handleClick} >
      <div className="content">
        <TextBox size={this.props.options.size} componentId={this.props.componentId} txt={this.props.txt} alignment={this.props.options.align} />
      </div>
    </div>
  }
}
