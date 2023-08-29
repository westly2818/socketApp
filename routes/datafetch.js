const express = require('express');
const fetch = require("../controllers/datafetch");
const router = express.Router();

router.post("/gethourly", fetch.getdata);

module.exports = router;