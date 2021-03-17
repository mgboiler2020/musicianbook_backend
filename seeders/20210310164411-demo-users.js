'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [
     {
        name: 'Matt',
        username: 'mguffy',
        password: '123',
        location: 'Michigantown, Indiana',
        skills: 'guitar, saxophone',
        currentProjects: 'Dog Tired',
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
     },
     {
      name: 'Jimi',
      username: 'jhendrix',
      password: '123',
      location: 'Seattle, Washington',
      skills: 'guitar, vocals',
      currentProjects: 'Greatest Hits',
      pastProjects: 'Are You Experienced?',
      genre: 'Classic Rock'
     },
     {
      name: 'Charlie',
      username: 'cparker',
      password: '123',
      location: 'NYC, New York',
      skills: 'saxophone',
      currentProjects: 'Charlie Parker Vol. 4',
      pastProjects: 'Bird: Master Takes',
      genre: 'Jazz'
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
