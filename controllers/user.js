const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Ex = require('../models/ex')


//index route
router.get('/', (req, res) => {
    User.find({}, (err, foundUser) => {
        res.render('./user/index.ejs', {
            user: foundUser
        });
    });
});

//new route
router.get('/new', (req, res) => {
    res.render('./user/new.ejs')
});


//post route
router.post('/', (req, res) => {
    User.create(req.body, (err, exFound) => {
        res.redirect('../ex')
    });
});


//show route
router.get('/:index', (req, res) => {
    User.findById(req.params.index, (err, foundUser) => {
        res.render('./user/show.ejs', {
            user: foundUser
        });
    });
});


//delete route
router.delete('/:index', (req, res) => {
    User.findByIdAndRemove(req.params.index, (err, foundUser) => {
        res.redirect('/user')
    });
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