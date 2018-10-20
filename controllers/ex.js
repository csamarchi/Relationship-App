const express = require('express');
const router  = express.Router();
const Ex      = require('../models/ex');

//index route
router.get('/', (req, res) => {
  Ex.find({}, (err, foundEx) => {
    res.render('./ex/index.ejs', {
      ex: foundEx
    });
  });
});








module.exports = router;
