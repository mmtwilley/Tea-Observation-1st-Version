const express = require('express');
const createError = require('http-errors');
const path = require('path');
const logger =  require('morgan')

var notesRouter = require('./routes/myjourn');
var recordRouter = require('./routes/record');
var deleteRouter = require('./routes/deletion');
// var updateRouter = require('./routes/updateRecords');


var app = express();
const cors = require('cors');
app.use(cors());

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/api/myjourn',notesRouter);
app.use('/api/record',recordRouter);
app.use('/api/delete/',deleteRouter);
// app.use('/api/update/',updateRouter);



app.use(function(req,res,next){
    next(createError(404));
})

app.use(function(err,req,res,next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
})

app.listen(4000,()=>{
    console.log("Listening on Port 4000")
})