// src/models/transaction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  borrowDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  bookCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  memberCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Transaction;
