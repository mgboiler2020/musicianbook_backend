'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Sessions', [
     {
      sessionName: 'Jam Session',
      genre: 'Classic Rock',
      sessionDate: 'March, 15 2021',
      sessionLocation: 'Lafyette, Indiana',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
