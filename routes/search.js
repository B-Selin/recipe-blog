const express = require("express");
const router = express.Router();
const searchCtrl = require('../controllers/search'); 


router.get('/search', searchCtrl.search );

module.exports = router;