/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api');

const app = express();
app.use(logger('dev'));

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// Set up mongoose connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Get the connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));

// Put all API endpoints under '/api'
app.use('/api', apiRouter);

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // The "catchall" handler: for any request that doesn't match one above,
  // send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

module.exports = app;
