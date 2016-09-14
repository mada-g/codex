import React from 'react';

export default class AddPage extends React.Component{
  render(){
    return <div className="addPage">
      <div className="addPage-box" onClick={this.props.handleClick}>
        + new page
      </div>
    </div>
  }
}
