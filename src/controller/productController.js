const { sendErrorResponse, sendSuccessResponse } = require("../responses/response");

const {
    createProduct,
    createCustomer,
    createHold,
    viewHoldById
} = require('../service/productService');
const { messages, customMessages } = require("../responses/response");


const createProducts = async (req, res) => {
     let body = req.body
    let result= await createProduct(body)
    if (!result.status) {
        return sendErrorResponse(
            req,
            res,
            result.statusCode,
            result.message,
            result.data
        );
    }
    return sendSuccessResponse(
        req,
        res,
        result.statusCode,
        result.message,
        result.data
    );
};


const createCustomers = async(req,res)=>{
    let body = req.body || {}
    let result= await createCustomer(body)
    if (!result.status) {
        return sendErrorResponse(
            req,
            res,
            result.statusCode,
            result.message,
            result.data
        );
    }
    return sendSuccessResponse(
        req,
        res,
        result.statusCode,
        result.message,
        result.data
    );
}

const createHolds = async(req,res)=>{
    let body = req.body
    let result= await createHold(body)
    if (!result.status) {
        return sendErrorResponse(
            req,
            res,
            result.statusCode,
            result.message,
            result.data
        );
    }
    return sendSuccessResponse(
        req,
        res,
        result.statusCode,
        result.message,
        result.data
    );
}

const viewHoldByIds = async(req,res)=>{
    let query = req.query
    let result= await viewHoldById(query)
    if (!result.status) {
        return sendErrorResponse(
            req,
            res,
            result.statusCode,
            result.message,
            result.data
        );
    }
    return sendSuccessResponse(
        req,
        res,
        result.statusCode,
        result.message,
        result.data
    );
}
module.exports = {
    createProducts,
    createCustomers,
    createHolds,
    viewHoldByIds
}