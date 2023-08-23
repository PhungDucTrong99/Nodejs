const express = require('express');
const app = express();
const port = 3000;

const db = require('./config/db/index'); // Đường dẫn tới tệp connect.js

db.connect(); // Gọi hàm connect từ tệp connect.js

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
