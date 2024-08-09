const BookService = require('../services/bookService');

class BookController {
  static async getAllBooks(req, res) {
    try {
      const books = await BookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookController;