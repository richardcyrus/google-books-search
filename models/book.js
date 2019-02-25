/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  authors: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
