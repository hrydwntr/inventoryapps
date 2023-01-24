'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Brands', [
      {
        name: 'Nazar Paint',
        total_employee: 50,
        address: 'Jalan Siliwangi Bandung 40375 Indonesia',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Brands', {})
  }
};
