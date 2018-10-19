const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');


app.get('/', (req, res) => {
  res.send('what up')
})















app.listen(3000, () => {
  console.log('listen on port');
})
