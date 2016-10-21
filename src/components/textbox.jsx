import React from 'react';
import $ from 'jquery';

export default class TextBox extends React.Component{

  componentDidMount(){
    let txtarea = document.querySelector(`.${this.props.componentId} textarea`);
    let clone = document.querySelector(`.${this.props.componentId} span`);

    txtarea.value = this.props.txt;

    clone.textContent = txtarea.value;

    txtarea.addEventListener('input', function(){
      clone.textContent = txtarea.value;
    })
  }

  componentDidUpdate(prevProps, prevState){
    //this.setState({label: this.props.label});
    if(prevProps.txt !== this.props.txt){

      let txtarea = document.querySelector(`.${this.props.componentId} textarea`);
      let clone = document.querySelector(`.${this.props.componentId} span`);

      txtarea.value = this.props.txt;
      clone.textContent = txtarea.value;
    }
  }

  render(){
    return <div className={`${this.props.componentId} ${this.props.size} ${this.props.alignment} textbox`}>
        <pre><span className="textbox-content"></span><br/></pre>
        <textarea />
    </div>
  }
}

/*
export default class TextBox extends React.Component{

  constructor(){
    super();
    this.state = {
      label:""
    }
  }

  handleChange = (e) => {
    let txt = document.querySelector(`.${this.props.componentId} .textbox-content`);
  }

  componentDidMount(){
    //this.setState({label: this.props.label});
    $(`.${this.props.componentId} .textbox-content`).html(this.props.txt);
  }

  componentDidUpdate(prevProps, prevState){
    //this.setState({label: this.props.label});
    if(prevProps.txt !== this.props.txt){
      $(`.${this.props.componentId} .textbox-content`).html(this.props.txt);
    }
  }

  render(){
    return <div className={`textbox-area ${this.props.componentId} ${this.props.size} ${this.props.alignment}`}>
      <div className="textbox-content" contentEditable onClick={this.handleChange}>
      </div>
    </div>
  }
}
*/
