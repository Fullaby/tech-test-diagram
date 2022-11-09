'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DiagramData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DiagramData.init({
    month: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DiagramData',
  });
  return DiagramData;
};