const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend/build')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1212',
    database: 'quiz_app'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('MySQL connected...');
    }
});
var user_id;
// Endpoint to save questions and test details
app.post('/api/save-questions', (req, res) => {
    const { test_name, questions } = req.body;
    
    // Example: Fetch TeacherID from request headers or another source
    const teacherId = req.headers.teacherid; // Adjust based on your authentication method

    // Insert into tests table
    const testSql = 'INSERT INTO test (TeacherID, TestName, NumberOfQuestions, TotalMarks) VALUES (?, ?, ?, ?)';
    const testValues = [user_id, test_name, questions.length, questions.length * 2];

    db.query(testSql, testValues, (err, testResult) => {
        if (err) {  
            console.error('Error saving test:', err);
            res.status(500).send('Error saving test');
        } else {
            const testId = testResult.insertId;

            // Prepare questions data for insertion
            const questionSql = 'INSERT INTO question (test_id, question, opt1, opt2, opt3, opt4, ans) VALUES ?';
            const questionValues = questions.map(q => [testId, q.question, q.opt1, q.opt2, q.opt3, q.opt4, q.ans]);

            // Insert into questions table
            db.query(questionSql, [questionValues], (err, questionResult) => {
                if (err) {
                    console.error('Error saving questions:', err);
                    res.status(500).send('Error saving questions');
                } else {
                    res.send('Test and questions saved successfully');
                }
            });
        }
    });
});

// Endpoint to handle student login
app.post('/student-login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM student WHERE username = ? AND password = ?';
    
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: 'An error occurred' });
        } else if (result.length > 0) {
            res.send({ message: 'Login successful', user: result[0] });
        } else {
            res.status(401).send({ message: 'Invalid username or password' });
        }
    });
});

// Endpoint to handle teacher login
app.post('/teacher-login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM teacher WHERE username = ? AND password = ?';
    
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: 'An error occurred' });
        } else if (result.length > 0) {
            user_id=result[0].TeacherID
            res.send({ message: 'Login successful', user: result[0] });
        } else {
            res.status(401).send({ message: 'Invalid username or password' });
        }
    });
});

// Serve the React frontend for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
