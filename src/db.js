const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3005;

const db = require('./config/db/index'); // Đường dẫn tới tệp connect.js

// db.connect(); // Gọi hàm connect từ tệp connect.js
mongoose.connect('mongodb://localhost:27017/Test2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


const UserSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/users", (req, res) => {
  UserModel.find({}).then(function(user) {
    console.log("connect db")
    res.json(user)
  }).catch(function(err) {
    console.log(err)
     console.log("connect db")
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
