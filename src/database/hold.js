const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");
 let hold = sequelize.define(
  "hold",
  {
    hold_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lable: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiry_date: {
      type: DataTypes.DATE,
    },
    notes: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.JSON,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.JSON,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
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

module.exports = hold;
