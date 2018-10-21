const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const exController   = require('./controllers/ex');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/ex', exController);


//app.get('/user/:index'(req, res) => {
//    consoole.log(req.params)
//    res.send(user[req.params.index]
//});
//
//
//
//
//
//


app.listen(3000, () => {
  console.log('listen on port');
})
