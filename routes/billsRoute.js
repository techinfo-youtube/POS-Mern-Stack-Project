const express = require("express");
const { addBillsController } = require("./../controllers/billsController");

const router = express.Router();

//routes

//MEthod - POST
router.post("/add-bills", addBillsController);

module.exports = router;
