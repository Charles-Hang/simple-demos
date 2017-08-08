var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//前台获取新闻
router.get('/', function(req, res, next) {
    var page = req.query.page * 8;
    var type = req.query.type;
    var data;
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });
    connection.connect();
    var sql = 'SELECT * from ' + type + ' LIMIT ' + page + ',8';
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        data = rows;
        res.render('index', { layout: false, data });
    });
    connection.end();
});
//后台获取新闻
router.get('/admin', function(req, res, next) {
    var type = req.query.type;
    var dataNor, dataImg;
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });
    connection.connect();
    var sql = 'SELECT * from ' + type;
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        if (type == 'image') {
            dataImg = rows;
            res.render('adminQimg', { layout: false, dataImg });
        } else {
            dataNor = rows;
            res.render('adminQNor', { layout: false, dataNor })
        }
    });
    connection.end();
});
//后台修改新闻
router.post('/adminfix', function(req, res, next) {
    var newsType = req.body.newsType;
    if (newsType != 'image') {
        var id = req.body.id;
        var title = req.body.title;
        var des = req.body.description;
        var img1 = req.body.img1;
        var img2 = req.body.img2;
        var img3 = req.body.img3;
        var url = req.body.url;
        var time = req.body.time;
        var type = req.body.type;
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'news'
        });
        connection.connect();
        var sql = 'UPDATE ' + newsType + ' SET title = "' + title + '", description = "' + des + '", img1 = "' + img1 + '", img2 = "' + img2 + '", img3 = "' + img3 + '", url = "' + url + '", time = "' + time + '", type = "' + type + '" WHERE id = ' + id;
        connection.query(sql, function() {
            res.send('修改成功！');
        });
        connection.end();
    } else {
        var id2 = req.body.id;
        var img = req.body.img;
        var url2 = req.body.url;
        var title2 = req.body.title;
        var praise = req.body.praise;
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'news'
        });
        connection.connect();
        var sql = 'UPDATE ' + newsType + ' SET title = "' + title2 + '", img = "' + img + '", url = "' + url2 + '", praise = "' + praise + '" WHERE id = ' + id2;
        connection.query(sql, function() {
            res.send('修改成功！');
        });
        connection.end();
    }
});
//后台插入新闻
router.post('/admininsert', function(req, res, next) {
    var newsType = req.body.newsType;
    if (newsType != 'image') {
        var id = req.body.id;
        var title = req.body.title;
        var des = req.body.description;
        var img1 = req.body.img1;
        var img2 = req.body.img2;
        var img3 = req.body.img3;
        var url = req.body.url;
        var time = req.body.time;
        var type = req.body.type;
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'news'
        });
        connection.connect();
        var sql = "INSERT INTO " + newsType + " (title, description, url, img1, img2, img3, time, type) VALUES ('" + title + "', '" + des + "', '" + url + "', '" + img1 + "', '" + img2 + "', '" + img3 + "', '" + time + "', '" + type + "')";
        console.log(sql);
        connection.query(sql, function() {
            res.send('插入成功！');
        });
        connection.end();
    } else {
        var id2 = req.body.id;
        var img = req.body.img;
        var url2 = req.body.url;
        var title2 = req.body.title;
        var praise = req.body.praise;
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'news'
        });
        connection.connect();
        var sql = "INSERT INTO " + newsType + " (title, url, img, praise) VALUES ('" + title2 + "', '" + url2 + "', '" + img + "', '" + praise + "')";
        connection.query(sql, function() {
            res.send('插入成功！');
        });
        connection.end();
    }
});
//后台删除新闻
router.post('/admindelet', function(req, res, next) {
    var newsType = req.body.newsType;
    var id = req.body.id;
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news'
    });
    connection.connect();
    var sql = "DELETE FROM " + newsType + " WHERE id = " + id;
    connection.query(sql, function() {
        res.send('删除成功！');
    });
    connection.end();
});

module.exports = router;
