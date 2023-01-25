'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',[
      {
        type: 'Gloss',
        price: 32000,
        image: 'backend\images\Gloss.jpg',
        UserId: 1,
        BrandId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'Super',
        price: 17000,
        image: 'backend\images\Super.jpg',
        UserId: 1,
        BrandId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'Gloss',
        price: 15000,
        image: 'backend\images\Pro.jpg',
        UserId: 1,
        BrandId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },

  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', {})
  }
};
