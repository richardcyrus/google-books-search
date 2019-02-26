import axios from 'axios';

/**
 * Create a custom axios instance. Configure it to always tell the backend
 * it supports/prefers JSON data.
 */
const ajax = axios.create({
  headers: {
    'Content-type': 'application/json'
  }
});

export default {
  // Search Google Books API.
  searchBooks: function(query) {
    return ajax.get('/api/google', { params: { q: query } });
  },
  // Get all saved books from the backend.
  getSavedBooks: function() {
    return ajax.get('/api/books');
  },
  // Remove a book from the saved list.
  deleteBook: function(id) {
    return ajax.delete(`/api/books/${id}`);
  },
  // Add a book to the saved list.
  saveBook: function(bookData) {
    return ajax.post('/api/books', bookData);
  }
};
