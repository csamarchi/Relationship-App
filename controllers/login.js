const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');


router.get('/', (req, res) => {

    res.render('userLogin/login.ejs', {
        message: req.session.message
    });
});

router.post('/register', async (req, res) => {


    const password = req.body.password;

    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    console.log(passwordHash)

    const userEntry = {};
    userEntry.name = req.body.name;
    userEntry.username = req.body.username;
    userEntry.password = passwordHash;
    userEntry.location = req.body.location;
    userEntry.sex = req.body.sex;
    userEntry.img = req.body.img;


    const user = await User.create(userEntry);
    console.log(user);
    req.session.username = user.username;
    req.session.logged = true;
    req.session.message = '';
    res.redirect('/user/' + user.id);
});


router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({username: req.body.username});
        console.log(foundUser.id)

        if (foundUser) {

            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.logged = true;

                res.redirect('/user/' + foundUser.id)
            } else {

                req.session.message = 'Username or Password is Wrong';
                res.redirect('/login')
            }
        } else {
            req.session.message = 'Username or Password is Wrong';
            res.redirect('/login')
        }
    } catch (err) {
        res.send('Wrong Username or Password')
    }
});

router.get('/logout', (req, res) => {
   // this basically restarts the session
   // and clears out all the properties that we set
   // on the session object
   req.session.destroy((err) => {
       if (err) {
           res.send(err);
       } else {
           res.redirect('/userLogin/login')
       }
   });
});




module.exports = router;
