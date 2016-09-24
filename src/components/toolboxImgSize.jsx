import React from 'react';

export default class ToolboxImgSize extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  handleImgResize = (e) => {
    console.log(this.props.focus);
    this.props.imgResize(this.props.focus, e.target.value);
  }

  render(){
    return <div className="toolbox toolbox-options">
      <div className="toolbox-box">
        <div className="toolbox-title">image width</div>
        <div className="toolbox-item img-size-tool">
          <input type="text" onChange={this.handleImgResize} value={this.props.size}/>
          <div className="input-label">%</div>
        </div>
      </div>
      </div>
  }
}
