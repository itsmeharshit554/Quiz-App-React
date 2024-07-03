import React from "react";
import "../static/quiz.css";
import QuizQuestion from "./QuizCard";

function Quiz() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>General Knowledge Quiz</h2>
          <p>Test your knowledge with these questions.</p>
        </div>
        <form>
          <QuizQuestion question="What is the capital of France?" name="q1" opt1="Paris" opt2="London" opt3="Berlin" opt4="Madrid"/>
          <QuizQuestion question="Which planet is known as the Red Planet?" name="q2" opt1="Mars" opt2="Venus" opt3="Jupiter" opt4="Saturn"/>
          <QuizQuestion question="Who wrote 'Romeo and Juliet'?" name="q3" opt1="William Shakespeare" opt2="Jane Austen" opt3="Charles Dickens" opt4="Mark Twain"/>
          <QuizQuestion question="What is the largest mammal on Earth?" name="q4" opt1="Blue whale" opt2="Elephant" opt3="Giraffe" opt4="Hippo"/>
          <QuizQuestion question="Which country is known as the Land of the Rising Sun?" name="q5" opt1="Japan" opt2="China" opt3="South Korea" opt4="Vietnam"/>
          <button type="submit" className="btn btn-submit">
            Submit Answers
          </button>
        </form>
      </div>
      <button onClick={toggleTheme} className="btn btn-toggle-theme">
        Toggle Theme
      </button>
    </div>
  );
}

export default Quiz;
