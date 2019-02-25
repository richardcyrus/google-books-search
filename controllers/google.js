/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const axios = require('axios');
const db = require('../models');

module.exports = {
  /**
   * Search the Google Books API and return only the entires that haven't
   * already been saved.
   *
   * This also makes sure that the books returned from the API all contain
   * the fields title, subtitle, authors, description, image and link.
   *
   * @param {*} req The express request object
   * @param {*} res The express response object
   */
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get('https://www.googleapis.com/books/v1/volumes', { params })
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumeInfo.title &&
            result.volumeInfo.subtitle &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks.thumbnail &&
            result.volumeInfo.infoLink
        )
      )
      .then((apiBooks) =>
        db.Book.find().then((dbBooks) =>
          apiBooks.filter((apiBook) =>
            dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then((books) => res.json(books))
      .catch((error) => res.status(422).json(error));
  },
};
