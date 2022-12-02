"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("data_link", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        isNullable: false,
        references: {
          model: "users",
          key: "id",
          as: "user_id",
        },
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("data_link", {
      type: "UNIQUE",
      name: "user_id_name_unique_user_images",
      fields: ["user_id", "name"],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "data_link",
      "user_id_name_unique_user_images"
    );
    await queryInterface.dropTable("data_link");
  },
};
