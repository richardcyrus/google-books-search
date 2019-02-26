/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const db = require('../models');
// const debug = require('debug')('google-books-search:booksController');

module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then((books) => res.json(books))
      .catch((error) => res.status(422).json(error));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then((book) => res.json(book))
      .catch((error) => res.status(422).json(error));
  },
  create: function(req, res) {
    // debug('::Create::BODY::', req.body);
    db.Book.create(req.body)
      .then((result) => res.json(result))
      .catch((error) => res.status(422).json(error));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch((error) => res.status(422).json(error));
  },
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then((book) => book.remove())
      .then((result) => res.json(result))
      .catch((error) => res.status(422).json(error));
  },
};
