import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';
import shortid from 'shortid';
import $ from 'jquery';

import * as actions from '../store/actions/index.js';

import extractHtmlData from '../utils/extractHtmlData.js';

import AddType from './addtype.jsx';
import AddBar from './addbar.jsx';

class Add extends React.Component{
  constructor(){
    super();
    this.state = {
      show: false
    }
  }

  handleClick = () =>{
    this.setState({show: !this.state.show});
  }

  handleSwitch = () => {
    extractHtmlData(this.props.data.sections, this.props.saveItemContent);
    this.props.openImgSelectPage(this.props.componentId, this.props.after);
  }

  handleTypeClick = (t) => {
    return () => {
      if(t==='image'){
        this.handleSwitch();
      }
      else{
        this.props.addItem(this.props.after, t, this.props.componentId, `cid${shortid.generate()}`);
      }

      this.handleClick();
    }
  }


  renderAddBars = () => {
    let allTypes1 = ['text', 'heading', 'image'];
    let allTypes2 = ['youtube', 'twitter', 'map', 'codepen'];

    if(this.state.show){
      return <div className={`add-container ${this.props.after ? 'marginDown' : 'marginUp'}`}>
        <AddBar allTypes={allTypes1} handleTypeClick={this.handleTypeClick} />
        <AddBar allTypes={allTypes2} handleTypeClick={this.handleTypeClick} />
      </div>
    }
    else{
      return null;
    }
  }

  renderButton = () =>{
      return <div className={`button`} onClick={this.handleClick}>
        {this.state.show ? <img src="/assets/icons/close.png" /> : <img src="/assets/icons/plus.png" />}
      </div>
  }

  render(){
    return <div className="add">
        {!this.props.after ? this.renderButton() : null}
        {this.renderAddBars()}
        {this.props.after ? this.renderButton() : null}
    </div>
  }
}

function injectState(state){
  return {
    data: state.get('data').toJS()
  }
}

export default connect(injectState, actions)(Add);
