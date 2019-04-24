'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    description: DataTypes.STRING,
    sign: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};