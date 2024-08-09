// src/models/member.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Transaction = require('./transaction');

const Member = sequelize.define('Member', {
  code: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  penaltyEndDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Member.hasMany(Transaction, { foreignKey: 'memberCode' });
Transaction.belongsTo(Member, { foreignKey: 'memberCode' });

module.exports = Member;
