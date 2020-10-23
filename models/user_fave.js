'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_fave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.fave.belongsTo(models.user)
      models.fave.hasMany(models.workout)
    }
  };
  user_fave.init({
    userId: DataTypes.INTEGER,
    workoutId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_fave',
  });
  return user_fave;
};