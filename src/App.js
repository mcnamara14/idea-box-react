import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import IdeaList from './IdeaList';
import IdeaForm from './IdeaForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: []
    }

    this.addIdea = this.addIdea.bind(this);
    this.updateIdea = this.updateIdea.bind(this);
  }

  addIdea(idea) {
    let ideas = this.state.ideas;

    ideas.push({ideaTitle: idea.newIdeaTitle, ideaBody: idea.newIdeaBody, ideaQuality: 'swill', id: ideas.length + 1})
    this.setState({
      ideas: ideas
    })
  }

  updateIdea(updatedIdea) {
    this.setState(state => ({
      ideas: state.ideas.map(idea => idea.id === updatedIdea.id ? updatedIdea : idea)
    }))
  }

  render() {
    return (
      <main>
        <header>
          <section className="headerContainer">
            <h1>idea<span>box</span></h1>
            <article className="ideaForm">
              <IdeaForm addIdea={this.addIdea} />
            </article>
          </section>
        </header>
          <IdeaList ideas={this.state.ideas} updateIdea={this.updateIdea}/>
      </main>
    );
  };
}

export default App;
