const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err); // Log the error for debugging
      res.status(500).json({ error: 'Failed to retrieve user' }); // Send a user-friendly error response
      return; // Important: Stop further execution
    }
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  });
});
//Consider using async/await for better error handling
app.get('/users/:id', async (req, res) => {
  try {
    const user = await db.getUser(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});