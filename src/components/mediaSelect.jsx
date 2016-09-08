import React from 'react';

export default class MediaSelect extends React.Component{

  constructor(){
    super();

    this.state = {
      value:""
    }
  }

  handleClick = () => {
    this.props.handleSelect(this.state.value);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render(){
    return <div className="mediaSelect">
      <div className="select-label">{this.props.label}</div>
      <input type="text" className="select-input-field" value={this.state.value} onChange={this.handleChange}/>
      <div className="select-btn" onClick={this.handleClick} >add</div>
    </div>
  }
}
