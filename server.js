var mongoUri = process.env.MONGODB_URI;
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');

require('./db/db');

const exController   = require('./controllers/ex');
const userController = require('./controllers/user');
const loginController = require('./controllers/login');


var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

mongoose.connect(mongoUri);

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



port = process.env.PORT || 3000;



app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');