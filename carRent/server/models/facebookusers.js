'use strict';
module.exports = (sequelize, DataTypes) => {
  var FacebookUsers = sequelize.define('FacebookUsers', {
    id: { type : DataTypes.STRING, primaryKey: true },
    token: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FacebookUsers;
};