const express = require("express");
// const dates = require("./Dates");
// const quotes = require("./Quotes");
// const routes = require("./Routes");
// const listmarkets = require("./Listmarkets");
const listplaces = require("./listplaces");
const user = require("./user");

const router = express.Router();

// router.use('/Dates', dates);
// router.use('/Quotes', quotes);
// router.use('/Routes', routes);
// router.use('/Listmarkets',listmarkets );
router.use('/listplaces', listplaces );
router.use('/user', user );



module.exports = router
