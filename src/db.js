// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Test1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
