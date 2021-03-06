import React, { Component } from 'react';
import DragDrop from './DragDrop.jsx';
import { browerHistory } from 'react-router';
//import '../../styles/App.css';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleUrlUpdate = this.handleUrlUpdate.bind(this);
    console.log(this.props.handleImageSubmission)
  }

  handleUrlUpdate(event){
    this.setState({
      url: event.target.value
    });
  }

  handleClick(event){
    event.preventDefault();
    this.props.changeParentUrl(this.state.url);
    this.setState({
      url: ''
    });
  }

  render() {
    return (
      <div className="input-container">
        <div className="url-input">
          <div className="input-header">translate a picture</div>

          <div className="url-input-field">
            <form onSubmit={this.handleClick}>
              <input className="input"
                type="text"
                value={this.state.url}
                onChange={this.handleUrlUpdate}
                placeholder="copy --> paste --> enter"
              />
            </form>
          </div>

          <div className="input-separator">-- or --</div>
        </div>


        <DragDrop className="dragdrop-input" changeParentUrl={this.props.changeParentUrl} />
      </div>
    );
  }
}

export default Input;
