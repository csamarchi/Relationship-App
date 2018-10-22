const express = require('express');
const router = express.Router();
const Ex = require('../models/ex');
const User = require('../models/user');

//index route
router.get('/', async (req, res) => {
  try {
    const allExes = await Ex.find();
    res.render('ex/index.ejs', {
      ex: allExes
    });
  } catch (err) {
    res.send(err)
  }
});


//new route
router.get('/new', (req, res) => {
  res.render('./ex/new.ejs', {})
})

//post route
router.post('/', async (req, res) => {
  try {
    await Ex.create(req.body);
    await res.redirect('/ex')
  } catch (err) {
    res.send(err);
  }
});

//search route
router.post('/showAll', (req, res) => {
  Ex.find({
    name: req.body.name
  }, (err, foundExes) => {
    res.render('./ex/showAll.ejs', {
      filteredName: req.body.name,
      filteredExes: foundExes
    });
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

//delete route
router.delete('/:index', (req, res) => {
  Ex.findByIdAndRemove(req.params.index, (err, foundEx) => {
    res.redirect('/ex')
  });
});

//edit route
router.get('/:index/edit', (req, res) => {
  Ex.findById(req.params.index, (err, foundEx) => {
    res.render('ex/edit.ejs', {
      ex: foundEx
    })
  });
});

//update route
router.put('/:index', async (req, res) => {
  try {
    await Ex.findByIdAndRemove(req.params.index)
    res.redirect('/ex')
  } catch(err) {
    res.send(err)
  }

  // Ex.findByIdAndUpdate(req.params.index, req.body, (err, updateEx) => {
  //   res.redirect('/ex/' + req.params.index)
  // });
})



module.exports = router;
