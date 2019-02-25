/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const express = require('express');
const router = express.Router();
const googleController = require('../../controllers/google');

// Matches "/api/google"
router.route('/').get(googleController.findAll);

module.exports = router;
