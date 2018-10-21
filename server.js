const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');


app.get('./user/:index'(req, res) => {
    consoole.log(req.params)
    res.send(req.params.index)
});















app.listen(3000, () => {
  console.log('listen on port');
})
