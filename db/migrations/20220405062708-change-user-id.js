'use strict';
const { DataTypes} = require('sequelize')
const {  CUSTOMER_TABLE} =require('./../models/customer.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique:true,
      field: 'user_id',
    })
  },

  async down (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
    })
  }
};
