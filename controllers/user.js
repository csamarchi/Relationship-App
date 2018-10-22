const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Ex = require('../models/ex')


//<--- Sign in page --->
router.get('/', async (req, res) => {
    try {
        const newUser = await User.find();
        res.render('./user/index.ejs', {
            user: newUser
        });
    } catch (err) {
        res.send(err)
        //Catch Statement
    }
});

//<--- show new page --->
router.get('/new', (req, res) => {
    res.render('./user/new.ejs')
});

//<--- After creating new user this redirects --->
router.post('/', async (req, res) => {
    try {
        await User.create(req.params.id)
        res.redirect('/user', {});
    } catch (err) {
        res.send(err)
        //Catch Statement
    }
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
router.get('/:index/edit', async (req, res) => {
        try { 
            const userEdit = await User.findByID(req.params.index)
            res.render('./user/edit.ejs', {
                user: userEdit
            });
        } catch (err) {
            res.send(err)
            //Catch Statement
        }
    });

router.put('/:index', (req, res) => {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.index, req.body, (err, foundUser) => {
        res.redirect('/');
    });
});
//<--- delete user --->

router.delete('/:index', async (req, res) => {
    try {
       await User.findByIdAndRemove(req.params.index)
            res.redirect('/user/')
    } catch (err) {
    res.send(err)
        //Catch Statement
    }
});


module.exports = router;
