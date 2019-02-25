/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const path = require('path');
const express = require('express');
const router = express.Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

// Book routes (/api/books)
router.use('/books', bookRoutes);

// Google routes (/api/google)
router.use('/google', googleRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'build', 'index.html')
  );
});

module.exports = router;
