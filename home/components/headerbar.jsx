import React from 'react';

import {ajaxSendData, ajaxGetData} from '../../shared/utils/ajaxUtils.js';


export default class HeaderBar extends React.Component{

  logout = () => {
    window.location = '/codex/logout';
    //ajaxGetData('/codex/logout');
  }

  render(){
    return <div className="headerBar">

      <div className="tool-sect page-tools">
        <div className="toolbox">
          <div className="toolbox-box app-title">codex</div>
        </div>
      </div>

      <div className="userstat">
        <div className="usernamedisp">signed in as <span className="auth">{this.props.username}</span></div>
        <div className="logout" onClick={this.logout}>log out</div>
      </div>

    </div>
  }
}
