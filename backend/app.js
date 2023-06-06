// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Dummy users data
const users = [
  {
    username: 'user',
    password: 'pass',
    role: 'admin',
  },
];

// Enable CORS for all routes
app.use(cors());

app.get('/login', (req, res) => {
  const { username, password } = req.query;

  // Find user with matching username and password
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Return success message if login is successful
    res.status(200).json({ message: 'Login successful' });
  } else {
    // Return error message if login fails
    res.status(401).json({ message: 'Login failed' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
