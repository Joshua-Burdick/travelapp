const express = require('express');
const router = express.Router();


// route for registering a new user
router.post('/register', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'User created'
  });
});

module.exports = router;