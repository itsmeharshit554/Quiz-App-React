import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../static/dash.css';

function Student() {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <nav>
      <Link to="/student-dashboard">
      <button id="add-task-btn">
          Quiz App
        </button>
        </Link>
        <ul>
          <li>
          <Link to="/student-give-test">
            <button >
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
              Give Test
            </button>
            </Link>
          </li>
          <li>
            <Link to="/student-view-result">
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
            </button></Link>
          </li>
        </ul>
        <button onClick={toggleTheme} >Toggle Theme</button>
      </nav>
      <div className='site-cunt'>
         {/* <h1>Welcome {userDetails.StudentName}to the Student Dashboard</h1> */}
        {/* <h2>Details</h2> */}
        {/* <h4>UserId: {userDetails.username}</h4> */}
        {/* <h4>Section: {userDetails.Section}   </h4>  */}
      <h1>Welcome to the Student Dashboard</h1>
      {userDetails && userDetails.StudentName && (
        <h3>Student Name: {userDetails.StudentName}</h3>
      )}
      {userDetails && userDetails.username && (
        <h3>UserId: {userDetails.username}</h3>
      )}
      {userDetails && userDetails.Section && (
        <h3>Section: {userDetails.Section}</h3>
      )}

      </div>
    </div>
  );
}

export default Student;
