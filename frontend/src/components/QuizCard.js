import React from 'react';
import "../static/quiz.css";

const QuizQuestion = ({ question, name, opt1, opt2, opt3, opt4 }) => {
  return (
    <div className="form-group">
      <label>{question}</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={opt1}
        />
        <label className="form-check-label">{opt1}</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={opt2}
        />
        <label className="form-check-label">{opt2}</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={opt3}
        />
        <label className="form-check-label">{opt3}</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={opt4}
        />
        <label className="form-check-label">{opt4}</label>
      </div>
    </div>
  );
};

export default QuizQuestion;
