//const initializeRoutes = (app) => {

    /* Redirect to route files */
//     app.use('/api/v1', require('./v1/groupRoutes'));
// };

// module.exports = initializeRoutes;
const express = require("express");
const router = express.Router();

const v1 = require('./v1/productRoute')

router.use('/api/v1' , v1);
module.exports = router;