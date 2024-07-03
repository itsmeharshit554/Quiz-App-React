import React from 'react';
import { Link } from 'react-router-dom';
import '../static/card.css';

const GiveTestCard = ({ title, questions, createdBy }) => {
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
          <Link to="/student-view-test/test-id=1">
          <button className="take-quiz-button">Take Quiz</button></Link>
        </div>
      </div>
    </div>
  );
};

export default GiveTestCard;
