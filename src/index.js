const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3005;

const db = require('./config/db/index'); // Đường dẫn tới tệp connect.js

// db.connect(); // Gọi hàm connect từ tệp connect.js
mongoose.connect("mongodb://localhost:27017/Test1");

const UserSchema = new mongoose.Schema({
  name: String,
  age: String
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(function(user) {
    res.json(user)
  }).catch(function(err) {
    console.log(err)
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
