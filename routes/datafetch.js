const express = require('express');
const fetch = require("../controllers/datafetch");
const router = express.Router();

router.post("/message", fetch.getdata);
router.post("/createuser", fetch.createuser);


module.exports = router;