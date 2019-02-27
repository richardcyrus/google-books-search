/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const express = require('express');
const router = express.Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

// Book routes (/api/books)
router.use('/books', bookRoutes);

// Google routes (/api/google)
router.use('/google', googleRoutes);

module.exports = router;
