import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';
import shortid from 'shortid';

import * as actions from '../store/actions/index.js';

import Item from './item.jsx';
import Title from './title.jsx';
import Section from './section.jsx';
import Heading from './heading.jsx';
import TextBox from './textbox.jsx';
import FileUpload from './fileUpload.jsx';
import ImgDisp from './imgDisp.jsx';
import ImgBankPage from './imgBankPage.jsx';
import Toolbar from './toolbar.jsx';
import ToolboxText from './toolboxText.jsx';
import MediaSelect from './mediaSelect.jsx';
import YoutubeItem from './youtubeItem.jsx';
import MediaDisp from './MediaDisp.jsx';

class App extends React.Component{

  handleOnFocus = (id) => {
    return () => {
      this.props.focusOnItem(id);
    }
  }

  renderContent = () => {
    return this.props.data.sections.map((id) => {
      const item = this.props.data.items[id];
      const type = item.type;
      let options = item.options;
      let content = item.content ? item.content : "\n";
      //console.log(type);
      let focus = this.props.app.focus;
      let itemComp = null;

      if(type === "text"){
        itemComp = <Section componentId={id} options={options} txt={content} focus={focus} handleClick={this.handleOnFocus(id)} />;
      }
      else if(type === "header"){
        itemComp = <Heading componentId={id} options={options} txt={content} handleClick={this.handleOnFocus(id)} />
      }
      else if(type === "img"){
        itemComp = <ImgDisp componentId={id} src={item.src} options={options} handleClick={this.handleOnFocus(id)} />
      }
      else if(type === "youtube"){
        itemComp = <MediaDisp componentId={id} options={options} boxStyle="yt-box" label="enter youtube link" match="watch?v=" baseUrl="https://www.youtube.com/embed" handleSelect={this.props.change_OPTION_src} handleClick={this.handleOnFocus(id)} />
      }
      else if(type === "codepen"){
        itemComp = <MediaDisp componentId={id} options={options} boxStyle="codepen-box" label="enter codepen link" match="pen/" baseUrl="http://codepen.io/chriscoyier/embed" handleSelect={this.props.change_OPTION_src} handleClick={this.handleOnFocus(id)} />
      }
      else return null;

      return <Item key={id} componentId={id}>
        {itemComp}
      </Item>

    })
  }


  renderPage = () => {
    if(this.props.app.editor){
      return this.renderContent();
    }
    else{
      return <ImgBankPage uploadFile={this.props.uploadFile}/>
    }
  }

  /*render(){
    return <div className="app">
      <ImgDisp src={this.props.data.img}/>
      <FileUpload uploadFile={this.props.uploadFile}/>
    </div>
  }*/

  handleSwitchClick = () => {
    this.props.saveData();
    //this.props.switchPage();
  }
/*
  <div className="switch-editor" onClick={this.handleSwitchClick}>
    switch
  </div>
*/
  render(){
    return <div>
      <Toolbar focusItem={this.props.app.focus}>
        <ToolboxText deleteItemInFocus={this.props.deleteItemInFocus}/>
      </Toolbar>
      <div className="app app-container rel">
        <br />
        <br />
        <br />
        <br />
        <br />
        {this.renderPage()}
      </div>
    </div>
  }
}

function injectState(state){
  return {
    data: state.get('data').toJS(),
    app: state.get('app').toJS()
  }
}

export default connect(injectState, actions)(App);
