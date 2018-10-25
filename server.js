const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db');

const exController   = require('./controllers/ex');
const userController = require('./controllers/user');
const loginController = require('./controllers/login');

//static styles 
app.use(express.static('public'));



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
  res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.render('./about/about.ejs')
})







app.listen(3000, () => {
  console.log('listen on port');
})
