const express = require('express')
const router = express.Router;
const User = require('../models/user')
const Ex = require('../models/ex')

router.get('/', (req, res) => {
    User.find({}, (err, foundUser)
      =>      { res.render('user/index.ejs'
    {
        user: foundUser;
    });
})
});

router.get('/new', (req, res) => {
    res.sender('user/new.ejs')
});

router.get('/:id', (req, res) => {
    user.findById(req.params.id,
                 (err, userFound) =>{
        res.render('user/show.ejs')
    })
})















for (let i = 0; i < user.length; i++) {
    userId.push(deletedUser.user[i].id);
}

