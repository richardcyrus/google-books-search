/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Return undefined for a value that is null or an empty string.
 * This prevents mongoose from sending an empty string property to the
 * database.
 *
 * @param {*} v The value to test.
 */
function removeEmpty(v) {
  if (v == null || v === '') {
    return undefined;
  }

  return v;
}

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    set: removeEmpty,
  },
  authors: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
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
