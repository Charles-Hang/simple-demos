var express = require('express');
var router = express.Router();


// 获得新闻主模板
router.get('/news', function(req, res, next) {
    res.render('layout');
});
// 获得后台主模板
router.get('/admin', function(req, res, next) {
    res.render('admin', {layout: false});
});
module.exports = router;
