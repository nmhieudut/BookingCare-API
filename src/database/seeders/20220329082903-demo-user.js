'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'hieutk5@gmail.com',
        firstName: 'Hieu',
        lastName: 'Nguyen',
        password: '123456',
        address: 'Cali',
        gender: false,
        roleId: 'R1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
