import React from 'react';

import MediaSelect from './mediaSelect.jsx';

export default class YoutubeItem extends React.Component{

  extractYoutubeId = (src) => {
    if(!src) return null;

    let index = src.indexOf('watch?v=');

    if(index === -1) return null;

    return src.substring(index+8, src.length);
  }

  handleSelect = (data) => {
    let videoId = this.extractYoutubeId(data);
    if(videoId){
      this.props.handleSelect(this.props.componentId, `https://www.youtube.com/embed/${videoId}`);
    }
    else{
      this.props.handleSelect(this.props.componentId, null);
    }
  }

  renderContent = (options) => {

    if(!options.src){
      console.log("MEDIA SELECT")
      return <MediaSelect label="enter youtube link" handleSelect={this.handleSelect}/>
    }
    else{
      return <div className="yt-box">
        <iframe className="yt-elem" src={options.src}></iframe>
      </div>
    }
  }

  render(){
    return <div className="youtubeItem" onClick={this.props.handleClick} onFocus={this.props.handleClick}>
      {this.renderContent(this.props.options)}
    </div>
  }
}
