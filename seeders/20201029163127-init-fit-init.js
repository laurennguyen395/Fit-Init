'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        name: 'Kelsey Whallon',
        email: 'kwhallon@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shelby',
        email: 'swhallon@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ryan',
        email: 'rwhallon@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lauren Nguyen',
        email: 'lauren@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Adrian',
        email: 'adrian@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stephen',
        email: 'stephen@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], { returning: true })

    await queryInterface.bulkDelete('workouts', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkWorkouts = await queryInterface.bulkInsert('workouts', [
      {
        date: '11/02/2020',
        name: 'Quads+Glutes+Hamstrings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '11/03/2020',
        name: 'Chest+Triceps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '11/04/2020',
        name: 'Abs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '11/05/2020',
        name: 'Back+Biceps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '11/06/2020',
        name: 'Legs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '11/07/2020',
        name: 'Full Body',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '11/08/2020',
        name: 'Rest+Recovery',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], { returning: true })

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
