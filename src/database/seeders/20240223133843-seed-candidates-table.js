"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("candidates", [
      {
        name: "John Doe",
        bio: "I am a software engineer with 10 years of experience. I have worked with several companies and have a lot of experience in the field. I am open to new opportunities.",
        email: "asas@gmail.com",
        phone: "123456789",
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jane Doe",
        bio: "I am a software engineer with 10 years of experience. I have worked with several companies and have a lot of experience in the field. I am open to new opportunities.",
        email: "asasasasas@gmail.com",
        phone: "987654321",
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "John Doe",
        bio: "I am a software engineer with 10 years of experience. I have worked with several companies and have a lot of experience in the field. I am open to new opportunities.",
        email: "sjasjaisjia@gmail.com",
        phone: "123456789",
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("candidates", null, {});
  },
};
