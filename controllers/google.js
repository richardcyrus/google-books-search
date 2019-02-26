/**
 * google-books-search
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <hello@rcyrus.com>
 */
const axios = require('axios');
const db = require('../models');
// const debug = require('debug')('google-books-search:googleController');

/**
 * Create a custom axios instance. Configure it to always tell the other
 * sites it supports/prefers JSON data.
 */
const ajax = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

module.exports = {
  /**
   * Search the Google Books API and return only the entires that haven't
   * already been saved.
   *
   * This also makes sure that the books returned from the API contain
   * the fields title, authors, description, image and link. (*1)
   *
   * @param {*} req The express request object (HTTP request)
   * @param {*} res The express response object (HTTP response)
   */
  findAll: async function(req, res) {
    const { query: params } = req;
    try {
      // Ask the Google Books API for all books that match the search
      // term.
      const results = await ajax.get(
        'https://www.googleapis.com/books/v1/volumes',
        { params }
      );

      // Filter the results from the API request to only return books
      // that have our required fields. (*1)
      const apiBooks = results.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      );

      // Get all books from the database.
      const dbBooks = await db.Book.find();

      // Filter the books we will return to just those entries that are
      // not already in the database.
      const books = apiBooks.filter((apiBook) =>
        dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
      );

      // Send the resulting list of books back as JSON.
      return res.json(books);
    } catch (e) {
      return res.status(422).json(e);
    }
  },
};
