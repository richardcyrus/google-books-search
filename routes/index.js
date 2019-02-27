/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

module.exports = router;
