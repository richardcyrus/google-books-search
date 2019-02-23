/**
 * google-book-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'respond with a resource' });
});

module.exports = router;
