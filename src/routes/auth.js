const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

// Hiển thị trang đăng nhập
router.get('/login', (req, res) => {
  res.render('login', { errorMessage: '' }); // Pass an empty errorMessage initially
});

// Đăng nhập
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log('user', user);

    if (!user) {
      console.log('Invalid username');
      return res.render('login', { errorMessage: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log('Invalid password');
      return res.render('login', { errorMessage: 'Invalid username or password' });
    }

    req.session.user = user;
    console.log('req.session.user', req.session.user);
    res.redirect('/home');
  } catch (error) {
    console.error('Error during login:', error);
    res.render('login', { errorMessage: 'An error occurred during login' });
  }
});


// Đăng xuất
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});

module.exports = router;
