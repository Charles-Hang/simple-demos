var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


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

hbs.registerHelper("Date", function(time) {
    var y = new Date(time).getMonth() + 1;
    var d = new Date(time).getDate();
    return y + ' - ' + d;
});
hbs.registerHelper("typeStyle", function(type) {
    var a;
    if (type.indexOf('置顶') != -1 || type.indexOf('热点') != -1 || type.indexOf('网易') != -1 || type.indexOf('搜狐') != -1 || type.indexOf('新浪') != -1 || type.indexOf('百家') != -1) {
        if (type == '') {
            return 'news-type bg-red bd-clear';
        } else {
            a = 'news-type bg-red'
            return a;
        }
    } else if (type.indexOf('猜你喜欢') != -1 || type.indexOf('独家') != -1) {
        if (type == '') {
            return 'news-type bg-blue bd-clear';
        } else {
            return 'news-type bg-blue';
        }
    } else {
        if (type == '') {
            return 'news-type bd-clear';
        } else {
            return 'news-type';
        }
    }
});
module.exports = app;
