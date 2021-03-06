import React from 'react';
import $ from 'jquery';
import shortid from 'shortid';

export default class FileUpload extends React.Component{

  constructor(){
    super();
    this.state = {
      selectedFile: ""
    }
  }

  handleUpload = () =>{
    if(this.props.uploading) return;
    const fs = this.refs.fileInput.getDOMNode().files;
    const f = fs[0];

    let _URL = window.URL || window.webkitURL;

    let img = new Image();
    img.src = _URL.createObjectURL(f);
    let ctx = this;
    img.onload = function(){
      if(ctx.props.prevID){
        ctx.props.selectImg(f, {width: this.width, height: this.height}, ctx.props.after, ctx.props.prevID, `cid${shortid.generate()}`);
      }

    }

  }

  handleFileChange = ()=>{
    const f = this.refs.fileInput.getDOMNode().files[0];
    this.setState({selectedFile: f.name});
  }

  selectFile = ()=>{
    if(this.props.uploading) return;
    this.refs.fileInput.getDOMNode().click();
  }

  renderUploadButton = () => {
    return <div className="upload-button-container">
        <input className="upload-button" type="button" ref="button" value="upload" onClick={this.handleUpload}/>
      </div>
  }

  render(){
    return <div className="fileUpload">
      <div className="file-input-container"><input type="file" ref="fileInput" name="file" className="file-input" onChange={this.handleFileChange}/></div>

      <div className="file-selector" onClick={this.selectFile}>select file</div>

      {this.state.selectedFile ? <div className="selected-file">{this.state.selectedFile}</div> : null}

      {this.state.selectedFile ? this.renderUploadButton() : null}

      {this.props.uploading ? <div className="upload-prog"><img src="/assets/icons/rolling.gif"/></div> : null}

    </div>
  }
}
