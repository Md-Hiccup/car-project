'use strict';
module.exports = (sequelize, DataTypes) => {
  var GoogleUser = sequelize.define('GoogleUser', {
    id: { type : DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return GoogleUser;
};