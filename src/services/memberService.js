const Member = require('../models/member');
const Book = require('../models/book');
const Transaction = require('../models/transaction');
const { Op } = require('sequelize');

class MemberService {
  static async borrowBook(memberCode, bookCode) {
    const member = await Member.findByPk(memberCode);
    if (!member) throw new Error('Member not found');
    
    const penaltyEndDate = member.penaltyEndDate;
    if (penaltyEndDate && penaltyEndDate > new Date()) throw new Error('Member is currently penalized');

    const borrowedBooksCount = await Transaction.count({ where: { memberCode, returnDate: null } });
    if (borrowedBooksCount >= 2) throw new Error('Member cannot borrow more than 2 books');

    const book = await Book.findByPk(bookCode);
    if (!book) throw new Error('Book not found');
    
    const borrowedBooks = await Transaction.count({ where: { bookCode, returnDate: null } });
    if (borrowedBooks >= book.stock) throw new Error('Book is already borrowed by another member');

    const transaction = await Transaction.create({
      memberCode,
      bookCode,
      borrowDate: new Date(),
    });

    return transaction;
  }

  static async returnBook(memberCode, bookCode) {
    const transaction = await Transaction.findOne({
      where: { memberCode, bookCode, returnDate: null },
    });
    if (!transaction) throw new Error('Transaction not found');

    transaction.returnDate = new Date();
    await transaction.save();

    const daysBorrowed = Math.ceil((new Date() - transaction.borrowDate) / (1000 * 60 * 60 * 24));
    if (daysBorrowed > 7) {
      const member = await Member.findByPk(memberCode);
      member.penaltyEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
      await member.save();
    }

    return transaction;
  }

  static async getAllMembers() {
    try {
      const members = await Member.findAll({
        include: [
          {
            model: Transaction,
            where: { returnDate: null },
            required: false,
          },
        ],
      });
      console.log('Fetched Members:', members); // Log tambahan
      return members.map(member => ({
        ...member.toJSON(),
        borrowedBooksCount: member.Transactions.length,
      }));
    } catch (error) {
      console.error('Error fetching members:', error); // Log error
      throw error;
    }
  }
  }

module.exports = MemberService;