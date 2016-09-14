import React from 'react';

export default class PageList extends React.Component{

  renderPages = (pages) => {

    if(pages.length === 0){
      return <div className="no-page">
        empty
      </div>
    }

    return pages.map((p) => {
      return <a className="list-elem" href={`/editor/${p.pageid}`}>
        <div className="page-title">{p.title}</div>
        <div className="page-details">{p.details}</div>
      </a>
    })
  }

  render(){
    return <div className={`pageList ${this.props.side}`}>

      <div className="title">
        <div className="title-box">
          {this.props.title}
        </div>
      </div>

      <div className="list-area">
        {this.renderPages(this.props.pages)}
      </div>

    </div>
  }
}
