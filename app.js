const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

require('dotenv/config');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    res.send("we are on home");
});

//User Routes
const user = require('./routes/user');
app.use('/api/user',user);

//Todo Routes
const todos = require('./routes/todo');
app.use('/api/todos',todos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
    });
  });

//start the server
const port = process.env.PORT || 3000;
app.listen(port);

//module.exports = app;