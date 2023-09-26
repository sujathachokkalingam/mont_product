const {sequelize} = require("../config/db");
const {DataTypes} = require('sequelize')

 let customer = sequelize.define("customer",{
        customer_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        customer_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        emailId:{
          type: DataTypes.STRING,
          allowNull:false
        },
        mobileNumber:{
            type: DataTypes.INTEGER,
          },
        priceLevel:{
            type: DataTypes.INTEGER,
          },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
},{
    freezeTableName: true,
    timestamps: true
})

//sequelize.sync()
module.exports = customer;