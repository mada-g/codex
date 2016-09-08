import React from 'react';

export default class Bt extends React.Component{

  getDefaultProps = () => {
    return {
      styleSheet: '',
      handleClick: null
    }
  }

  render(){
    return <div className={`bt ${this.props.styleSheet}`} onClick={this.props.handleClick}>
        {this.props.children}
    </div>
  }
}
