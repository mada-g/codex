import React from 'react';

export default class PageList extends React.Component{

  constructor(){
    super();
    this.state = {
      dialogue: false,
      pageFocusId: null,
      pageFocusTitle: null
    }
  }

  reqDelete = () => {
    this.props.deletePage(this.state.pageFocusId).then(() => {
        this.setState({dialogue: false, pageFocusId: null, pageFocusTitle: null})
      })
  }

  handleDeletePage = (id, title) => {
    return () => {
      this.setState({dialogue: true, pageFocusId: id, pageFocusTitle: title});
      console.log('delete ' + id);
    }
  }

  renderDeleteDialogue = () => {
    return <div className="deleteDialogue">
      <div className="dialogueBox">
        <div className="dialogueQuestion">
          <div>Are you sure you want to delete</div>
          <div className="page-focus-title">{this.state.pageFocusTitle} ?</div>
        </div>
        <div className="dialogueAnswers-box">
          <div className="dialogueAnswer" onClick={this.reqDelete}>Yes</div>
          <div className="dialogueAnswer" onClick={() => {this.setState({dialogue:false, pageFocusId:null, pageFocusTitle: null})}}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  }

  renderPages = (pages) => {

    if(pages.length === 0){
      return <div className="no-page">
        empty
      </div>
    }

    return pages.map((p) => {
      return <div className="list-elem">
        <a href={`/editor/${p.pageid}`}>
          <div className="page-title">{p.title}</div>
          <div className="page-details">{p.details}</div>
        </a>
        <div className="delete-bar">
          <div className="delete-page-btn" onClick={this.handleDeletePage(p.pageid, p.title)}>
            <img src="/assets/icons/deletepage.png" />
          </div>
        </div>
      </div>
    })
  }

  render(){
    return <div className={`pageList ${this.props.side}`}>

      {this.state.dialogue ? this.renderDeleteDialogue() : null}

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
