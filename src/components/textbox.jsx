import React from 'react';
import $ from 'jquery';
/*
export default class TextBox extends React.Component{

  componentDidMount(){
    let txt = document.querySelector(`.${this.props.componentId} textarea`);
    let clone = document.querySelector(`.${this.props.componentId} span`);

    clone.textContent = txt.value;

    txt.addEventListener('input', function(){
      clone.textContent = txt.value;
    })
  }

  render(){
    return <div className={`${this.props.componentId} textbox`}>
      <div className={`box ${this.props.size}`}>
        <pre><span></span><br/></pre>
        <textarea />
      </div>
    </div>
  }
}*/


export default class TextBox extends React.Component{

  handleChange = (e) => {
    let txt = document.querySelector(`.${this.props.componentId} .textbox-content`);
    console.log(txt.innerHTML);
  }

  componentDidMount(){
    $(`.${this.props.componentId} .textbox-content`).html(this.props.txt);
  }

  render(){
    return <div className={`textbox-area ${this.props.componentId} ${this.props.size} ${this.props.alignment}`}>
      <div className="textbox-content" contentEditable onClick={this.handleChange}>
      </div>
    </div>
  }
}
