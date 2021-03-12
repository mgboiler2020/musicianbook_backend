'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Session.belongsToMany(models.User, {
    through: "UserSession",
    foreignKey: "userId",
    otherKey: "sessionId",
  });
}
  }
  Session.init({
    sessionName: DataTypes.STRING,
    genre: DataTypes.STRING,
    sessionDate: DataTypes.STRING,
    sessionLocation: DataTypes.STRING,
    bandId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};