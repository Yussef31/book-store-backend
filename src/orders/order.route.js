const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router =  express.Router();

// create order endpoint
router.post("/", createAOrder);
// get orders by name 
router.get("/email/:email", getOrderByEmail);

module.exports = router;