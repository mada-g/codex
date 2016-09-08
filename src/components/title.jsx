import React from 'react';

import TextBox from './textbox.jsx';
import Add from './add.jsx';

export default class Title extends React.Component{
  render(){
    return <div className="title">
      <div className="container">
        <TextBox size="h0" componentId={this.props.componentId} txt={this.props.txt}/>
      </div>
    </div>
  }
}
