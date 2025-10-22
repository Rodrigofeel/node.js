"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn("customers", "status", {
            type: Sequelize.ENUM("active", "inactive"),
            allowNull: false,
            defaultValue: "active",
        });
    },

    async down(queryInterface) {
        return queryInterface.removeColumn("customers", "status");
    },
};
