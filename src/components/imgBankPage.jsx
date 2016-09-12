import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';
import $ from 'jquery';
import shortid from 'shortid';

import * as actions from '../store/actions/index.js';

import FileUpload from './fileUpload.jsx';

//const imgArea = 42500;

class ImgBankPage extends React.Component{

  constructor(){
    super();
    this.state = {
      selectedImg: null
    }
  }

  componentDidMount = () => {
    this.props.fetchImgsData();
  }

  insertFromImgBank = () => {
    this.props.selectImgFromBank(this.state.selectedImg, this.props.app.after, this.props.app.imgInsertId, `cid${shortid.generate()}`);
  }

  deleteImg = () => {
    if(!this.state.selectedImg) return;
    let imgid = this.state.selectedImg.imgid;
    this.props.deleteImage(imgid).then((res) => {
      console.log('res: ' + res);
      if(res) this.setState({selectedImg: null});
    })
  }

  renderUploadArea = () => {
    return <div className="add-img">
        <div className="sect-title"><span>Add a new image</span></div>
        <div className="upload-area">
          <FileUpload uploadFile={this.props.uploadFile} selectImg={this.props.selectImg} prevID={this.props.app.imgInsertId} after={this.props.app.after} />
        </div>
      </div>
  }

  renderImgBank = (imgs) => {
    return imgs.map((img) => {
      let dimenClass = (img.dimen.width > img.dimen.height) ? 'bigWidth' : 'bigHeight';
      let isSelected = (this.state.selectedImg && this.state.selectedImg.imgid === img.imgid) ? "selected" : "";
      return <div className={`img-select-elem ${img.imgid} ${isSelected}`} >
        <img src={img.url} className={`abs all-center ${dimenClass}`} onClick={() => {this.setState({selectedImg: img})} } />
      </div>
    })
  }

  renderImgSelection = () => {
    return <div className="img-selection">
      <div className="sect-title"><span>Select an image</span></div>
      <div className="img-selection-area">
        {this.renderImgBank(this.props.data.imgsData)}
      </div>
    </div>
  }

  renderImgSelectBar = () => {
    return <div className= "img-select-bar">
      <div className="img-select-btn">
        <div className="img-select-insert" onClick={this.insertFromImgBank}>insert</div>
      </div>
      <div className="img-select-btn">
        <div className="img-select-delete" onClick={this.deleteImg}>delete</div>
      </div>
    </div>
  }


  renderBackBtn = () =>{
    return <div className="back-btn-container">
      <div className="back-btn">
        <img src="/assets/icons/backspace-arrow-red.png"/>
      </div>
    </div>
  }

  render(){
    return <div className="imgBankPage">
      {this.renderBackBtn()}
      {this.renderUploadArea()}
      {this.renderImgSelection()}
      {this.state.selectedImg ? this.renderImgSelectBar() : null}
    </div>
  }
}

function injectState(state){
  return {
    data: state.get('data').toJS(),
    app: state.get('app').toJS()
  }
}

export default connect(injectState, actions)(ImgBankPage);
