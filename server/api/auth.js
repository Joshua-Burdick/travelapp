const express = require('express');
const router = express.Router();
const Account = require('../models/accounts');

// route for registering a new user
router.post('/register', async (req, res) => {
  const createdUser = new Account({
    username: req.body.username,
    password: req.body.password
  });

  try {
    const postUser = await createdUser.save();
    res.json(postUser);
  } catch (error) {
    res.json({ error });
  };
});

// route for logging in a user
router.post('/login', async (req, res) => {
  let USER;
  try {
      USER = await Account.findOne({ 
      username: req.body.username
    });
  } catch (error) {
    res.json({ 
      error 
    });
  } finally {
    if (USER) {
      if (USER.password === req.body.password) {
        res.json({ 
          message: 'Login successful',
          authed: true
        });
      } else {
        res.json({ 
          message: 'Incorrect password',
          authed: false
        });
      }
    } else {
      res.json({
        message: 'User not found',
        authed: false
      });
    }
  }
}); 
  

module.exports = router;