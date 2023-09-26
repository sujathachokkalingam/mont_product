const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

let product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price1: {
      type: DataTypes.INTEGER,
    },
    price2: {
      type: DataTypes.INTEGER,
    },
    price3: {
      type: DataTypes.INTEGER,
    },
    dimension: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    breadth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stockAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holdNumbers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

//sequelize.sync()

module.exports = product;
