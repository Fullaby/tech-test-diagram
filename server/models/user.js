'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcryptHelper');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {type: DataTypes.STRING,
    allowNull:false,
  validate:{
    notNull:{
      msg: "Username Is Required"
    },
    notEmpty:{
      msg: "Username Is Required"
    }
  }},
    password: {type: DataTypes.STRING,
    allowNull:false,
  validate:{
    notNull:{
      msg: "Password Is Required"
    },
    notEmpty:{
      msg: "Password Is Required"
    }
  }}
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((el,options)=>{
    el.password= hashPass(el.password)
  })
  return User;
};