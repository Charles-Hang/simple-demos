//入口文件
define(function(require){
	var slide = require('slide');
	var tab = require('tab.js');
	var goTop = require('goTop.js');
	var playPhoto = require('playPhoto.js');
	slide.slide();
	tab.tab();
	goTop.goTop();
	playPhoto.playPhoto();
});