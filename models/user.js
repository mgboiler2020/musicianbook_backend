'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // User.belongsTo(models.Session, {foreignKey: 'userId'});
      User.belongsToMany(models.Session, {
        through: "UserSession",
        foreignKey: 'userId',
        otherKey: "sessionId"
      });
    }
    }
    User.init({
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      location: DataTypes.STRING,
      skills: DataTypes.STRING,
      currentProjects: DataTypes.STRING,
      pastProjects: DataTypes.STRING,
      genre: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  }
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     location: DataTypes.STRING,
//     skills: DataTypes.STRING,
//     currentProjects: DataTypes.STRING,
//     pastProjects: DataTypes.STRING,
//     genre: DataTypes.STRING
//   }, {});
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     User.associate = function(models) {
//       User.belongsTo(models.Session, { foreignKey: 'userId' });
//       User.belongsToMany(models.Session, {
//       through: "UserSession",
//       foreignKey: "userId",
//       otherKey: "sessionId",
//   });
//     return User;
// };
// }
  
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     location: DataTypes.STRING,
//     skills: DataTypes.STRING,
//     currentProjects: DataTypes.STRING,
//     pastProjects: DataTypes.STRING,
//     genre: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
  
