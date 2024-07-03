import React from 'react';
import './Card.css';

const Card = ({ title, questions, createdBy }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-left">
          <h3>{title}</h3>
        </div>
        <div className="card-middle">
          <p>Question: {questions}</p>
          <p>Created By:<br/>{createdBy}</p>
        </div>
        <div className="card-right">
          <button className="take-quiz-button">Take Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
