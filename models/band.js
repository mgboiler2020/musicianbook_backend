'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Band.init({
    bandName: DataTypes.STRING,
    showDates: DataTypes.STRING,
    location: DataTypes.STRING,
    currentProjects: DataTypes.STRING,
    pastProjects: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};