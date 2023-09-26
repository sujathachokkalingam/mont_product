const { Sequelize } = require("sequelize")
const dotenv = require("dotenv");
dotenv.config(".env")

const sequelize = new Sequelize({
    database: process.env.DATABASE_NAME,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect:"mysql"
}
);

const connectToDb = async()=>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to db");
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {sequelize, connectToDb}