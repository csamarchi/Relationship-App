const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Ex = require('../models/ex')


//<--- Sign in page --->
router.get('/', (req, res) => {
    User.find({}, (err, foundUser) => {
        console.log("new user function")
        res.render('./user/index.ejs', {
            user: foundUser
        });
    });
});

//<--- show new page --->
router.get('/new', (req, res) => {
    res.render('./user/new.ejs')
});

//<--- After creating new user this redirects --->
router.post('/', (req, res) => {
    User.create(req.body, (err, foundUser) => {
        res.redirect('/user')
    });
});

//<--- Show user --->
router.get('/:index', (req, res) => {
    User.findById(req.params.index, (err, foundUser) => {
        res.render('./user/show.ejs', {
            user: foundUser
        });
    });
});

//<--- edit user --->
//router.get('/:index/', (req, res) => {
//  User.findById(req.params.index, (err, foundUser) => {
//      console.log("edit user works")
//    res.render('user/edit.ejs', {
//      user: foundUser
//    });
//  });
//});
//<--- delete user --->

router.delete('/:index', (req, res) => {
    User.findByIdAndRemove(req.params.index, (err, foundUser) => {
        res.redirect('/user/')
    });
});


module.exports = router;
