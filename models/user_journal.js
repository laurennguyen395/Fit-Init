'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      models.user_journal.belongsTo(models.user)
      models.user_journal.belongsTo(models.workout)
=======
>>>>>>> submain
    }
  };
  user_journal.init({
    content: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
    workoutid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_journal',
  });
  return user_journal;
};