const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Ex = require('../models/ex')

router.get('/', (req, res) => {
    User.find({}, (err, foundUser) => {
        console.log("hey")
        res.render('./user/index.ejs', {
            user: foundUser
        });
    });
});


router.get('/new', (req, res) => {
    res.render('./user/new.ejs')
    });


router.post('/', (req, res) => {
    User.create(req.body, (err, foundUser)=> {
        res.redirect('/user')
    });
});




module.exports = router;
