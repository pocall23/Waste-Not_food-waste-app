const mongoose = require('mongoose');

mongoose.connect(process.env.git  || 'mongodb://localhost/foods-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
