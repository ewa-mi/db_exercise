"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Ewa Mia",
          email: "emia@gmail.com",
          phone: 128766,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ana Young",
          email: "anyou@gmail.com",
          phone: 986532,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
