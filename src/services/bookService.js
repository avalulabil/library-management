const Book = require('../models/book');
const Transaction = require('../models/transaction');

class BookService {
  static async getAllBooks() {
    const books = await Book.findAll();
    const borrowedBooks = await Transaction.findAll({ where: { returnDate: null } });

    const availableBooks = books.map(book => {
      const borrowedCount = borrowedBooks.filter(trans => trans.bookCode === book.code).length;
      return {
        ...book.toJSON(),
        stock: book.stock - borrowedCount,
      };
    });

    return availableBooks;
  }
}

module.exports = BookService;