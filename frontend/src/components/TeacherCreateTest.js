import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../static/dash.css';
import QuesCreateCard from './QuesCreateCard';

function TeacherCreateTest() {
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({ 
    question: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    ans: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const addNewQuestion = (e) => {
    e.preventDefault();
    setQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
    setCurrentQuestion({ 
      question: "",
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
      ans: "",
    });
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/save-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test_name: testName, questions }),
      });

      if (response.ok) {
        console.log('Test and questions saved successfully');
      } else {
        console.error('Error saving test and questions');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <nav>
        <Link to="/teacher-dashboard">
      <button id="add-task-btn">
          Quiz App
        </button>
        </Link>
        <ul>
          <li>
            <Link to="/teacher-create-test">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={13}
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                Create Test
              </button>
            </Link>
          </li>
          <li>
            <Link to="/teacher-view-result">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={13}
                  fill="currentColor"
                  className="bi bi-clipboard-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                  />
                </svg>
                View Marks
              </button>
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
      <div className='site-cunt'>
        <h1>Create Quiz</h1>
        <input
          name="testName"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          placeholder="Test Name"
        />
        {questions.map((question, index) => (
          <QuesCreateCard
            key={index}
            index={index}
            question={question}
            handleQuestionChange={handleQuestionChange}
          />
        ))}
        <form onSubmit={addNewQuestion}>
          <input name="question" value={currentQuestion.question} onChange={handleChange} placeholder="Question" />
          <input name="opt1" value={currentQuestion.opt1} onChange={handleChange} placeholder="Option 1" />
          <input name="opt2" value={currentQuestion.opt2} onChange={handleChange} placeholder="Option 2" />
          <input name="opt3" value={currentQuestion.opt3} onChange={handleChange} placeholder="Option 3" />
          <input name="opt4" value={currentQuestion.opt4} onChange={handleChange} placeholder="Option 4" />
          <input name="ans" value={currentQuestion.ans} onChange={handleChange} placeholder="Answer" />
          <br></br>
          <button className="add-btn"type="submit">Add Question</button>
        </form>
        <button className="sub-btn" onClick={handleSubmit}>Save Test</button>
      </div>
    </div>
  );
}

export default TeacherCreateTest;
