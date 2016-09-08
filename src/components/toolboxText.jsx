import React from 'react';

import ToolButton from './ToolButton.jsx';

export default class ToolboxText extends React.Component{

  renderButtons = (arr) => {
    return arr.map((i) => {
      return <div className={`toolbox-item ${this.props.btnStyle}`}>
        <ToolButton label={i.label} src={i.src} selectedSrc={i.selectedSrc} selected={i.selected} handleClick={i.handleClick}/>
      </div>
    })
  }

  render(){
    return <div className="toolbox toolbox-options">
      <div className="toolbox-box">
        {this.props.title ? <div className="toolbox-title">{this.props.title}</div> : null}
        {this.renderButtons(this.props.btns)}
      </div>
    </div>
  }
}
