const express = require("express");
const app = express();
const routerService = require("./src/routes/index")
const {sequelize, connectToDb} = require("./src/config/db")
const body_parser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config(".env");

const PORT = process.env.PORT;
console.log(PORT,"PORT")
app.use(express.json())
app.use("/",routerService);
app.get("/get",(req,res)=>{
    res.send("mesg success")
})

app.listen(PORT,async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
})