import React, { Component } from 'react';
import Idea from './Idea';
import './styles/IdeaList.css';

export default function IdeaList(props) {
console.log(props.ideas)
    return (
      <section className="ideaList">
        <div className="ideasContainer">
          { props.ideas.map(idea => {
            return <Idea ideaId={idea.ideaId} idea={idea} updateIdea={props.updateIdea}/>
          })
          }
        </div>
      </section>
    )
};

