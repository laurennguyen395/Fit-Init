'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workout_exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      models.workout_exercise.belongsToMany(models.workout)
=======
>>>>>>> submain
    }
  };
  workout_exercise.init({
    workoutFk: DataTypes.INTEGER,
    exerciseFk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'workout_exercise',
  });
  return workout_exercise;
};