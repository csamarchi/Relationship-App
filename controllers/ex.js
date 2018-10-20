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
  Ex.create(req.body, (err, exFound) => {
    res.redirect('/ex')
  });
});

//show route
router.get('/:index', (req, res) => {
  Ex.findById(req.params.index, (err, foundEx) => {
    res.render('./ex/show.ejs', {
      ex: foundEx
    });
  });
});





module.exports = router;
