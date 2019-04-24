'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    profile_id: DataTypes.BIGINT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
      User.belongsTo(models.Profile, {
        foreignKey: 'profile_id'
      });
  };
  return User;
};