import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';

import * as actions from '../store/actions/index.js';

import HeaderBar from './headerBar.jsx';
import AddPage from './addPage.jsx';
import PageList from './pageList.jsx';


class App extends React.Component{

  constructor(){
    super();
    this.state={
      visib: true
    }
  }

  handleAddPage = () => {
    this.setState({visib: !this.state.visib});
    this.props.createPage().then((res) => {
      if(!res.status) return;
      window.location = "/codex/editor/" + res.pageid;
    });
  }

  render(){
    return <div className="app">

      <div className="icons-loader">
        <img src="/assets/icons/rolling.gif" />
      </div>

      <HeaderBar username={this.props.data.username} />

      <AddPage handleClick={this.handleAddPage} username={this.props.data.username}/>

      <div className={`allPages group ${this.state.visib ? 'visib' : 'no-visib'}`}>
        <div className="list left-list">
          <PageList pages={this.props.data.drafts} username={this.props.data.username} title="drafts" side="left" deletingpage={this.props.app.deletingpage} deletePage={this.props.deletePage} removePageInfo={this.props.removePageInfo}/>
        </div>
        <div className="list right-list">
          <PageList pages={this.props.data.published} username={this.props.data.username} title="published" side="right" deletingpage={this.props.app.deletingpage} deletePage={this.props.deletePage} removePageInfo={this.props.removePageInfo}/>
        </div>
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
