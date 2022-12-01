const express = require('express');
const router = express.Router();
const Account = require('../models/accounts');

// route for registering a new user
router.post('/register', async (req, res) => {
  const createdUser = new Account({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  try {
    const postUser = await createdUser.save();
    res.json({
      message: 'User created successfully',
      user: postUser
    });
  } catch (error) {
    res.json({ 
      error 
    });
  };
});

// route for logging in a user
router.post('/login', async (req, res) => {
  let user;
  try {
    user = await Account.findOne({ 
      username: req.body.username
    });
  } catch (error) {
    res.json({ 
      error 
    });
  } finally {
    if (user) {
      if (user.password === req.body.password) {
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

// get user email by username
router.get('/email/:username', async (req, res) => {
  let user;
  try {
    user = await Account.findOne({
      username: req.params.username
    });
  } catch (error) {
    res.json({
      error
    });
  } finally {
    if (user) {
      res.json({
        email: user.email
      });
    } else {
      res.json({
        message: 'User not found'
      });
    }
  }
});

// get all users
router.get('/all', async (req, res) => {
  let users;
  try {
    users = await Account.find();
  } catch (error) {
    res.json({
      error
    });
  } finally {
    if (users) {
      res.json({
        users
      });
    } else {
      res.json({
        message: 'No users found'
      });
    }
  }
});
  
module.exports = router;