var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var flash = require("connect-flash");

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var Pagecntr = require('./Cntrl/pagecntr');
var contact = require('./Cntrl/contact');
var enroll = require('./Cntrl/enroll_vod');

var testfb = require('./Cntrl/fbcount');
var youtube_api = require('./Cntrl/youtube_api');

//var db = require('./mongodb');
//db.start();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine("html", ejs.renderFile);


app.set('port', process.env.PORT || 9000);
app.set('host', process.env.HOST || '52.88.241.133');
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') + " "+app.get('host'));
});
app.use(flash());
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/', routes);
app.use('/users', users);
app.all('/',Pagecntr.mainpage);
app.all('/4year',Pagecntr.year4);
app.all('/origin',Pagecntr.origin_contents);
app.all('/staff',Pagecntr.staff);
app.all('/enroll',Pagecntr.enroll);
app.all('/popup',Pagecntr.popup);
app.all('/reply',Pagecntr.reply);
app.all('/donor',Pagecntr.donor);
app.all('/channel',Pagecntr.channel);
app.all('/etc_contact',Pagecntr.etc_contact);
app.all('/ad_contact',Pagecntr.ad_contact);
app.all('/location',Pagecntr.location);
app.all('/teacher',Pagecntr.teacher);
app.all('/event',Pagecntr.event);
app.all('/contact',Pagecntr.contact);
app.all('/life',Pagecntr.life);

app.all('/contact',contact.contact);
app.all('/adcontact',contact.ad_contact);

//app.all('/testfb',testfb.test_fb);
//app.all('/test',youtube_api.youtube_api);


//app.all('/enroll_vod',enroll.new_VR);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
