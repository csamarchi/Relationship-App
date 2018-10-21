const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const exController   = require('./controllers/ex');
const userController = require('./controllers/user');
//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/ex', exController);
app.use('/user', userController);


app.get('/', (req, res) => {
  res.send('what up')
})








app.listen(3000, () => {
  console.log('listen on port');
})
