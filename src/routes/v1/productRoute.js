const express = require("express");


const productController = require("../../controller/productController");

const productRouter = express.Router();

//product routes
productRouter.post("/createProduct", productController.createProducts);
productRouter.post("/createCustomer", productController.createCustomers);
productRouter.post("/createHold", productController.createHolds);
productRouter.get("/calculatehold", productController.viewHoldByIds);

module.exports = productRouter;