import React from 'react';

import MediaSelect from './mediaSelect.jsx';

export default class MediaDisp extends React.Component{

  extractIdFromUrl = (src, match) => {
    if(!src) return null;
    let index = src.indexOf(match);
    if(index === -1) return null;
    return src.substring(index + match.length, src.length);
  }

  handleSelect = (data) => {
    let videoId = this.extractIdFromUrl(data, this.props.match);
    if(videoId){
      this.props.handleSelect(this.props.componentId, `${this.props.baseUrl}/${videoId}`);
    }
    else{
      this.props.handleSelect(this.props.componentId, null);
    }
  }

  renderContent = (options) => {

    if(!options.src){
      return <MediaSelect label={this.props.label} handleSelect={this.handleSelect}/>
    }
    else{
      return <div className={`media-box ${this.props.boxStyle}`}>
        <iframe className="media-elem" src={options.src}></iframe>
      </div>
    }
  }

  render(){
    return <div className="mediaDisp" onClick={this.props.handleClick} onFocus={this.props.handleClick}>
      {this.renderContent(this.props.options)}
    </div>
  }
}
