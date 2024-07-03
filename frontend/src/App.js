import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Student from './components/StudentDashboard';
import Teacher from './components/TeacherDashboard';
import StudentGiveTest from './components/StudentGiveTest';
import StudentResult from './components/StudentViewResult';
import TeacherCreateTest from './components/TeacherCreateTest';
import TeacherResult from './components/TeacherViewResult';
import Quiz from './components/MainQuiz';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Login Portal</h1>
      <div>
        <button style={{ margin: '10px', padding: '10px 20px' }} onClick={() => navigate('/student-login')}>
          Student Login
        </button>
        <button style={{ margin: '10px', padding: '10px 20px' }} onClick={() => navigate('/teacher-login')}>
          Teacher Login
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<Login/>} />
        <Route path="/teacher-login" element={<Login/>} />
        <Route path="/student-dashboard" element={<Student/>}/>
        <Route path="/teacher-dashboard" element={<Teacher/>}/>
        <Route path="/student-give-test" element={<StudentGiveTest/>}/>
        <Route path="/teacher-create-test" element={<TeacherCreateTest/>}/>
        <Route path="/student-view-result" element={<StudentResult/>}/>
        <Route path="/teacher-view-result" element={<TeacherResult/>}/>
        <Route path="/student-view-test/test-id=1" element={<Quiz/>}/>
      </Routes>
    </Router>
  );
}

export default App;
