'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [
     {
        name: 'Matt',
        username: 'mguffy',
        password: '123',
        location: 'Indianapolis, Indiana',
        skills: 'guitar, alto saxophone',
        currentProjects: 'Anthology',
        pastProjects: '5 Dogs',
        genre: 'Classic Rock'
     },
     {
        name: 'Eric',
        username: 'eclapton',
        password: '123',
        location: 'London, England',
        skills: 'guitar, vocals',
        currentProjects: 'Greatest Hits',
        pastProjects: 'Layla and Other Assorted Love Songs',
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
