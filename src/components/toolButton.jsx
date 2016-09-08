import React from 'react';

export default class ToolButton extends React.Component{

  fullSrc = (src) => {
    return `/assets/icons/${src}.png`
  }

  renderLabel = (label) => {
    if(label){
      return <div className="label">
        {this.props.label}
      </div>
    }
    else return null;
  }

  renderImg = (src) => {
    if(!this.props.src) return null;

    else if(this.props.selected && this.props.selectedSrc){
      return <img src={this.fullSrc(this.props.selectedSrc)} />
    }

    else return <img src={this.fullSrc(this.props.src)} />
  }

  render(){
    return <div className="tool-button">
      <div className="tool-img-container">
        <div className={`${this.props.src ? "tool-img" : "tool-label"} ${this.props.selected ? "selected" : ""}`}
              onClick={this.props.handleClick}>

          {this.renderLabel(this.props.label)}
          {this.renderImg()}

        </div>
      </div>
    </div>
  }
}
