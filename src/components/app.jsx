import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';
import shortid from 'shortid';
import $ from 'jquery';

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

import extractHtmlData from '../utils/extractHtmlData.js';
import {localDataSave, loadLocalData} from '../utils/saveData.js';

class App extends React.Component{

  constructor(){
    super();
  }

  componentDidMount = () => {

    if(loadLocalData(this.props.data.pageid) !== null){
      this.props.setLocalDataToken(true);
    }
  }

  handleOnFocus = (id) => {
    return () => {
      if(id === this.props.app.focus) return;
      this.props.focusOnItem(id);
      $(`.${id} .textbox-content`).focus();
    }
  }

  renderMediaDisp = (id, options, label, match, baseUrl, focus, handleSelect, handleClick) => {
    return (elem) => {
      return <MediaDisp componentId={id} options={options} focus={focus} label={label} match={match} baseUrl={baseUrl} handleSelect={handleSelect} handleClick={handleClick}>
        {elem}
      </MediaDisp>
    }

  }

  renderContent = () => {
    return this.props.data.sections.map((id) => {
      const item = this.props.data.items[id];
      const type = item.type;
      let options = item.options;
      let content = item.content ? item.content : "\n";
      let focus = this.props.app.focus;
      let itemComp = null;

      if(type === "text"){
        itemComp = <Section componentId={id} options={options} txt={content} focus={focus} handleClick={this.handleOnFocus(id)} />;
      }
      else if(type === "header"){
        itemComp = <Heading componentId={id} options={options} txt={content} focus={focus} numbering={this.props.data.headingNumbering} txt={content} handleClick={this.handleOnFocus(id)} />
      }
      else if(type === "img"){
        itemComp = <ImgDisp componentId={id} src={item.src} txt={content} options={options} focus={focus} handleClick={this.handleOnFocus(id)} />
      }
      else if(type === "title"){
        itemComp = <Title componentId={id} options={options} txt={content} focus={focus} handleClick={this.handleOnFocus(id)} />
      }
      else if(type === "youtube"){
        itemComp = this.renderMediaDisp(id, options, 'enter youtube link', "watch?v=", "https://www.youtube.com/embed", focus, this.props.change_OPTION_src, this.handleOnFocus(id))
        itemComp = itemComp(
          <div className={`media-box yt-box`}>
            <iframe className="media-elem" src={options.src}></iframe>
          </div>
        )
      }
      else if(type === "codepen"){
        itemComp = this.renderMediaDisp(id, options, "enter codepen link", "pen/", "http://codepen.io/chriscoyier/embed", focus, this.props.change_OPTION_src, this.handleOnFocus(id))
        itemComp = itemComp(
          <div className={`media-box codepen-box`}>
            <iframe className="media-elem" src={options.src}></iframe>
          </div>
        )
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

  handleSwitchClick = () => {
    this.props.saveData();
  }

  renderIcons = () => {
    let icons = ['alignleft_w', 'alignright_w', 'aligncenter_w',
                'alignleft', 'alignright', 'aligncenter',
                'close', 'plus', 'upload', 'eye', 'newspaper',
                'closegw', 'backspace-arrow-red'];

    return icons.map((ic) => {
      return <img src={`/assets/icons/${ic}.png`} />
    })
  }

  render(){
    return <div>
      <div className="icons-loader">
        {this.renderIcons()}
        <img src="/assets/icons/rolling.gif" />
      </div>

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
