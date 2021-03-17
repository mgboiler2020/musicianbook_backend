'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Sessions', [
     {
      sessionName: 'Jam Session',
      genre: 'Classic Rock',
      sessionDate: 'March 15, 2021',
      sessionLocation: 'Lafayette, IN',
      },
      {
      sessionName: 'Blues Jam',
      genre: 'Blues Rock',
      sessionDate: 'May 1st, 2021',
      sessionLocation: 'Memphis, TN',
      },
      {
      sessionName: 'Jazz Jam',
      genre: 'Jazz',
      sessionDate: 'June 1st, 2021',
      sessionLocation: 'Chicago, IL',
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
