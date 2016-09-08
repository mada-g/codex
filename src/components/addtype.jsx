import React from 'react';

export default class AddType extends React.Component{

  render(){
    return <div className={`addtype ${this.props.styling}`} onClick={this.props.handleTypeClick}>
      <span>{this.props.label}</span>
    </div>
  }
}
