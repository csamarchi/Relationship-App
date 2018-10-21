const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Ex = require('../models/ex')


//<--- Sign in page --->
router.get('/', (req, res) => {
    User.find({}, (err, foundUser) => {
        console.log("hey")
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

//<--- Show route --->
router.get('/:index', (req, res) => {
    User.findById(req.params.index, (err, foundUser) => {
        res.render('./user/show.ejs', {
            user: foundUser
        });
    });
});



module.exports = router;
