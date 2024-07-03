import React from 'react';
import "../static/create-quiz.css";
function QuesCreateCard({ index, question, handleQuestionChange }) {
  return (
    <div>
      <input
        name="question"
        value={question.question}
        onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
        placeholder="Question"
      />
      <input
        name="opt1"
        value={question.opt1}
        onChange={(e) => handleQuestionChange(index, 'opt1', e.target.value)}
        placeholder="Option 1"
      />
      <input
        name="opt2"
        value={question.opt2}
        onChange={(e) => handleQuestionChange(index, 'opt2', e.target.value)}
        placeholder="Option 2"
      />
      <input
        name="opt3"
        value={question.opt3}
        onChange={(e) => handleQuestionChange(index, 'opt3', e.target.value)}
        placeholder="Option 3"
      />
      <input
        name="opt4"
        value={question.opt4}
        onChange={(e) => handleQuestionChange(index, 'opt4', e.target.value)}
        placeholder="Option 4"
      />
      <input
        name="ans"
        value={question.ans}
        onChange={(e) => handleQuestionChange(index, 'ans', e.target.value)}
        placeholder="Answer"
      />
    </div>
  );
}

export default QuesCreateCard;
