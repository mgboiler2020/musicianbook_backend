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
          bandName: 'Dire Straits',
          showDates: 'April, 1 1979',
          location: 'Liverpool, England',
          currentProjects: 'On the Night',
          pastProjects: 'Brothers in Arms',
          genre: 'Classic Rock'
      },
      {
          bandName: 'Dire Straits',
          showDates: 'April, 1 1979',
          location: 'Liverpool, England',
          currentProjects: 'On the Night',
          pastProjects: 'Brothers in Arms',
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
