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
      window.location = "/editor/" + res.pageid;
    });
  }

  render(){
    return <div className="app">
      <HeaderBar />
      <AddPage handleClick={this.handleAddPage}/>

      <div className={`allPages group ${this.state.visib ? 'visib' : 'no-visib'}`}>
        <div className="list left-list">
          <PageList pages={this.props.data.drafts} title="drafts" side="left"/>
        </div>
        <div className="list right-list">
          <PageList pages={this.props.data.published} title="published" side="right"/>
        </div>
      </div>

    </div>
  }
}


function injectState(state){
  return {
    data: state.get('data').toJS()
  }
}

export default connect(injectState, actions)(App);
