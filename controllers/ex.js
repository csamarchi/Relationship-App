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

//new route
router.get('/new', (req, res) => {
  res.render('./ex/new.ejs')
})

//post route
router.post('/', (req, res) => {
  console.log(req.body);
  Ex.create(req.body, (err, exFound) => {
    res.redirect('/ex')
  });
});







module.exports = router;
