const express = require('express');
const router = express.Router();
const prodController = require('../controller/ProductController');
/**
 * This is a sample route that will be used to get all the products
 */
router.get('/all', function (req, res, next) {
    /**
     * This is a sample data that will be sent
     */
    prodController.getAll(req,res);
});

router.post('/add', function (req, res, next) {
    /**
     * This is a sample data that will be sent
     */
    prodController.addProduct(req.body,res);
});

router.get('/find', function (req, res, next) {
    /**
     * This is a sample data that will be sent
     */
    prodController.findOne(req,res);
});

// Export the router
module.exports = router;