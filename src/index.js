const express = require('express');
const { default: mongoose } = require('mongoose');
const session = require('express-session');

const port = 3005;
const db = require('./db');
const authRoutes = require('./routes/auth');
const UserModel = require('./models/user'); // Import UserModel từ user.js
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng routes

app.use('/auth', authRoutes);

app.get('/home', (req, res) => {
  // res.render('home');
  if (req.session.user) {
    res.render('home');
  } else {
    console.log(req.body); // Use console.log for debugging
    res.redirect('/auth/login');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/users", (req, res) => {
  UserModel.find({}).then(function(user) {
    console.log("connect db")
    res.json(user)
  }).catch(function(err) {
    console.log(err)
     console.log("connect db")
  })
})

app.get('/form', (req, res) => {
  // console.log(req.body); // Use console.log for debugging
  res.render('form');
});

app.post('/form', (req, res) => {
  console.log(req.body); // Use console.log for debugging
  res.render('form');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
