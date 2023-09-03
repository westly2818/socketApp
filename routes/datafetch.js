const express = require('express');
const fetch = require("../controllers/datafetch");
const router = express.Router();

router.post("/message", fetch.getdata);

module.exports = router;