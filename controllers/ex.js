const express = require('express');
const router  = express.Router();
const Ex      = require('../models/ex');
const User    = require('../models/user');

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
  User.find({}, (err, allUsers) => {
    res.render('./ex/new.ejs', {
      user: allUsers
    })
  })
})

//post route
router.post('/', async (req, res) => {

  User.findById(req.body.userId, (err, foundUser) => {
    Ex.create(req.body, (err, createdEx) => {
      foundUser.ex.push(createdEx);
      foundUser.save((err, data) => {
        res.redirect('/ex')
      });
    });
  });
});

  // try {
  //   await Ex.create(req.body);
  //   await res.redirect('/ex')
  // } catch (err) {
  //   res.send(err);
  // }


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
      console.log(foundEx)
    User.findOne({'ex._id': req.params.index}, (err, foundUser) => {
      console.log(foundUser, ' this is foundUser');
      res.render('./ex/show.ejs', {
        ex: foundEx,
        user: foundUser
      });
    })
  });
});

//delete route
router.delete('/:index', async (req, res) => {
  try {
    await Ex.findByIdAndRemove(req.params.index);
    res.redirect('/ex')
  } catch(err) {
    res.send(err)
  }
});

//edit route
router.get('/:index/edit', async (req, res) => {
  try {
    const exEdit = await Ex.findById(req.params.index)
    res.render('./ex/edit.ejs', {
      ex: exEdit
    })
  } catch(err) {
    res.send(err)
  }
});

//update route
router.put('/:index', async (req, res) => {
  try {
    await Ex.findByIdAndUpdate(req.params.index, req.body)
    res.redirect('/ex')
  } catch(err) {
    res.send(err)
  }
})



module.exports = router;
