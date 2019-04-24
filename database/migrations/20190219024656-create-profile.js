'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Profiles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING
            },
            last_name: {
                type: Sequelize.STRING
            },
            birthdate: {
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.STRING
            },
            sign: {
                type: Sequelize.STRING
            },
            deleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }).then(() => queryInterface.addConstraint('Users', ['profile_id'], {
            type:'FOREIGN KEY',
            references: {
                table:'Profiles',
                field:'id'
            }
        }));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Profiles');
    }
};