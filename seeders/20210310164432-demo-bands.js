'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Bands', [
      {
          bandName: 'Derek and the Dominos',
          showDates: 'July, 4 1971',
          location: 'Miami, Florida',
          currentProjects: 'Greatest Hits',
          pastProjects: 'Layla and Other Assorted Love Songs',
          genre: 'Classic Rock'
      },
      {
        bandName: 'Dog House',
        showDates: 'April, 1 2021',
        location: 'Frankfort, Indiana',
        currentProjects: 'Anthology',
        pastProjects: '5 Dogs',
        genre: 'Classic Rock'
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
