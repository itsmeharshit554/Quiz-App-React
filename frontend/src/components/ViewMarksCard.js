import React from 'react';
import '../static/card.css';

const ResultCard = ({ title, questions, createdBy, marks }) => {
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
          <p>Marks Obtained: {marks}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
