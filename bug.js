const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Express doesn't automatically handle this error
      console.error(err); // Log the error
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});