const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Ex = require('../models/ex');


//index route
router.get('/', (req, res) => {
    User.find({}, (err, foundUser) => {
        res.render('./user/index.ejs', {
            user: foundUser
        });
    });
});

//link route
router.get('/:index/ex', (req, res) => {
  User.findById(req.params.index, (err, userFound) => {
    Ex.find({}, (err, exsFound) => {
      res.render('./user/show.ejs' , {
        user: userFound,
        ex: exsFound
      })
    })
  })
})

//show route
router.get('/:index', (req, res) => {
    User.findById(req.params.index, (err, foundUser) => {
      console.log(foundUser);
        res.render('user/show.ejs', {
            user: foundUser
        });
    });
});


//delete route
router.delete('/:index', async (req, res) => {
  try {
   const deletedUser = await User.findByIdAndRemove(req.params.index);
      console.log(deletedUser);
    res.redirect('/user')
  } catch(err) {
    res.send(err)
  }
});



//edit route
router.get('/:index/edit', (req, res) => {
    User.findById(req.params.index, (err, foundUser) => {
        res.render('user/edit.ejs', {
            user: foundUser
        })
    });
});

//update route
router.put('/:index', (req, res) => {
    User.findByIdAndUpdate(req.params.index, req.body, (err, updateUser) => {
        res.redirect('/user')
    });
});




module.exports = router;
