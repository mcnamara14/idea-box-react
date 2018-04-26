import React from 'react';
import upvote from './assets/upvote.svg';
import downvote from './assets/downvote.svg';

export default function Idea(props) {

  const upvoteClickHandler = () => {
    console.log(this)
    switch(props.idea.ideaQuality) {
      case 'swill':
          var quality = 'plausible'
          break;
      case 'plausible':
        var quality = 'genius'
        break;
      case 'genius':
        var quality = 'genius'
        break;
    }

    let updatedIdea = Object.assign({}, props.idea, {ideaQuality: quality});

    props.updateIdea(updatedIdea);
  };

  const downvoteClickHandler = () => {
    console.log(this)
    switch(props.idea.ideaQuality) {
      case 'genius':
          var quality = 'plausible'
          break;
      case 'plausible':
        var quality = 'swill'
        break;
      case 'swill':
        var quality = 'swill'
        break;
    }

    let updatedIdea = Object.assign({}, props.idea, {ideaQuality: quality});

    props.updateIdea(updatedIdea);
  };

  return (
    <article className="idea">
      <img className="delete-button icon" src="" />
      <div>
        <h2 contentEditable="true">{props.idea.ideaTitle}</h2>
        <p contentEditable="true">{props.idea.ideaBody}</p>
      </div>
      <div className="vote-container">
        <div className="vote-buttons-container">
          <a href="#" onClick={upvoteClickHandler}><img className="upvote-button icon" src={upvote} /></a>
          <a href="#" onClick={downvoteClickHandler}><img className="downvote-button icon" src={downvote} /></a>
        </div>
        <p className="idea-quality-container">quality: <span className="idea-quality">{props.idea.ideaQuality}</span></p>
      </div>  
      <hr />
    </article>
  )
};