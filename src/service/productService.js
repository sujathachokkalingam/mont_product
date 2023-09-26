const { statusCodes } = require("../responses/httpStatusCodes");
const { messages, customMessages } = require("../responses/response");
const product = require("../database/product");
const customer = require("../database/customer");
const hold = require("../database/hold");

const createProduct = async (body) => {
  try {
    let create = await new product(body).save();
    
    return {
      status: true,
      data: create,
      message: messages.success,
      statusCode: statusCodes.HTTP_OK,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: statusCodes.HTTP_INTERNAL_SERVER_ERROR,
      message: error.message,
      data: [],
    };
  }
};

const productList = async (id) => {
  try {
    console.log(id, "id");
    let list = await product.findAll({
      where: { product_id: id },
    });

    return {
      status: true,
      data: list,
      message: messages.success,
      statusCode: statusCodes.HTTP_OK,
    };
  } catch (error) {
    console.log(error, "=============err");
    return {
      status: false,
      statusCode: statusCodes.HTTP_INTERNAL_SERVER_ERROR,
      message: error.message,
      data: [],
    };
  }
};

const createCustomer = async (body) => {
  try {
    let create = await new customer(body).save();
    console.log(create, "create");
    return {
      status: true,
      data: create,
      message: messages.success,
      statusCode: statusCodes.HTTP_OK,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: statusCodes.HTTP_INTERNAL_SERVER_ERROR,
      message: error.message,
      data: [],
    };
  }
};

const customerList = async (id) => {
  try {
    let list = await customer.findAll({
      where: { customer_id: id },
    });

    return {
      status: true,
      data: list,
      message: messages.success,
      statusCode: statusCodes.HTTP_OK,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: statusCodes.HTTP_INTERNAL_SERVER_ERROR,
      message: error.message,
      data: [],
    };
  }
};
const createHold = async (body) => {
  try {
    let create = await new hold(body).save();

    return {
      status: true,
      data: create,
      message: messages.success,
      statusCode: statusCodes.HTTP_OK,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: statusCodes.HTTP_INTERNAL_SERVER_ERROR,
      message: error.message,
      data: [],
    };
  }
};

const viewHoldById = async (query) => {
  try {
    let id = query.id;
    let data = await hold.findByPk(id);
    data = data.get({ plain: true });

    if (data.product_id) {
      let type_ids = data.product_id.map(async (d) => await productList(d));
      let typeData = await Promise.all(type_ids).then((products) =>
        products.map((d) => d.data)
      );

      data.product_id = data.product_id.map((typeId) => {
        let productData = typeData.find(
          (productData) => productData[0].dataValues.product_id === typeId
        );

        return {
          id: productData[0].dataValues.product_id,
          name: productData[0].dataValues.product_name,
          price1: productData[0].dataValues.price1,
          price2: productData[0].dataValues.price2,
          price3: productData[0].dataValues.price3,
          length: productData[0].dataValues.length,
          breadth: productData[0].dataValues.breadth,
        };
      });
    }
    if (data.customer_id) {
      let type_ids = data.customer_id.map(async (d) => await customerList(d));
      let typeData = await Promise.all(type_ids).then((customers) =>
        customers.map((d) => d.data)
      );

      data.customer_id = data.customer_id.map((typeId) => {
        let customerData = typeData.find(
          (customerData) => customerData[0].dataValues.customer_id === typeId
        );

        return {
          id: customerData[0].dataValues.customer_id,
          name: customerData[0].dataValues.customer_name,
        };
      });
    }
    let amount = 0;
    if (data.customer_id > 1) {
      for (const product of data.product_id) {
        amount += product.length * product.breadth * product.price1;
      }
    } else {
      let customerId = data.customer_id.map((id) => id.id);

      let checkPriceLevel = await customer.findAll({
        where: { customer_id: customerId[0] },
        raw: true,
        nest: true,
      });

      if (checkPriceLevel.length > 0) {
        let priceLevel = checkPriceLevel[0].priceLevel;
        let price;
        if (priceLevel === 1) {
          price = data.product_id[0].price1;
        } else if (priceLevel === 2) {
          price = data.product_id[0].price2;
        } else if (priceLevel === 3) {
          price = data.product_id[0].price3;
        }

        for (const product of data.product_id) {
          amount += product.length * product.breadth * price;
        }
      }
    }

    data.amount = amount;

    return {
      status: true,
      data: data,
      message: messages.success,
      statusCode: statusCodes.HTTP_OK,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: statusCodes.HTTP_INTERNAL_SERVER_ERROR,
      message: error.message,
      data: [],
    };
  }
};

module.exports = {
  createProduct,
  createCustomer,
  createHold,
  productList,
  customerList,
  viewHoldById,
};
