import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';
import $ from 'jquery';

import * as actions from '../store/actions/index.js';

import FileUpload from './fileUpload.jsx';

//const imgArea = 42500;

class ImgBankPage extends React.Component{

  componentDidMount = () => {
    this.props.fetchImgsData();
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
      return <div className={`img-select-elem ${img.imgid}`} >
        <img src={img.url} className={`abs all-center ${dimenClass}`} />
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


  render(){
    return <div className="imgBankPage">
      {this.renderUploadArea()}
      {this.renderImgSelection()}
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
