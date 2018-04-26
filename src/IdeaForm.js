import React, { Component } from 'react';
import IdeaList from './IdeaList';
import './styles/IdeaForm.css';

export default class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIdeaTitle: '',
      newIdeaBody: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.saveIdea = this.saveIdea.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      newIdeaTitle: e.target.value,
    })
  }

  handleChangeBody(e) {
    this.setState({
      newIdeaBody: e.target.value
    })
  }

  saveIdea(e) {
    e.preventDefault();
    this.props.addIdea(this.state);

    this.setState({
      newIdeaTitle: '',
      newIdeaBody: ''
    })
  }

  render(props) {
    return (
      <form className="ideaForm">
        <input className="ideaTitle" placeholder="Enter a Title" value={this.state.newIdeaTitle} onChange={this.handleChangeTitle} />
        <input className="ideaBody" placeholder="Enter a Body" value={this.state.newIdeaBody} onChange={this.handleChangeBody} />
        <button className="ideaButton" onClick={this.saveIdea}>Save Idea</button>
      </form> 
    )
  }
}