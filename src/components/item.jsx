import React from 'react';
import {connect} from 'react-redux';
import {Map, List, toJS} from 'immutable';

import * as actions from '../store/actions/index.js';

import Add from './add.jsx';

class Item extends React.Component{

  render(){
    let focus = this.props.app.focus;

    /*const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        focus: focus
      })
    );*/

    return <div className="item">
      {(focus === this.props.componentId) ? <Add componentId={this.props.componentId} after={0} /> : null}
      <div className="item-container">{this.props.children}</div>
      {(focus === this.props.componentId) ? <Add componentId={this.props.componentId} after={1} /> : null}
    </div>
  }
}


function injectState(state){
  return {
    data: state.get('data').toJS(),
    app: state.get('app').toJS()
  }
}

export default connect(injectState, actions)(Item);
