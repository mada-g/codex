import React from 'react';

import AddType from './addtype.jsx';

export default class AddBar extends React.Component{

  renderAddTypes = (allTypes) =>{
    return allTypes.map((t) => {
      return <div className="inline-block">
        <AddType label={t} styling={`${t}-style`} handleTypeClick={this.props.handleTypeClick(t)} />
      </div>
    })
  }

  render(){
    return <div className="addbar">
      <div className="bar">
        {this.renderAddTypes(this.props.allTypes)}
      </div>
    </div>
  }
}
