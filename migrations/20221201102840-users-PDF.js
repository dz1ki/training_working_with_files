"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("data_binary", {
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
      name: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.BLOB,
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
    await queryInterface.addConstraint("data_binary", {
      type: "UNIQUE",
      name: "user_id_name_unique_user_pdf",
      fields: ["user_id", "name"],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "data_binary",
      "user_id_name_unique_user_pdf"
    );
    await queryInterface.dropTable("data_binary");
  },
};
