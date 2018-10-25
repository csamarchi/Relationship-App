const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db');

const exController   = require('./controllers/ex');
const userController = require('./controllers/user');
const loginController = require('./controllers/login');

//middleware
app.use(session({
    secret: 'This is some random secret string',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/ex', exController);
app.use('/user', userController);
app.use('/login', loginController);

app.get('/', (req, res) => {
  res.send('what up')
})








app.listen(3000, () => {
  console.log('listen on port');
})
