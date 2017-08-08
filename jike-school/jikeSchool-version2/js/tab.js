//tab切换模块
define(function(require, exports, module) {
	var $ = require('jquery.min');
    exports.tab = function() {
        //给热门课程tab绑定事件
        $('.hot-lesson>li').on('mouseenter', function() {
            $('.hot-lesson>li').removeClass('hot-lesson-hover');
            $('.hot-lesson>li').children().removeAttr('style');
            $(this).addClass('hot-lesson-hover');
            $(this).children().css('display', 'block');
        });
        //给热门课程里的卡片绑定事件
        $('.hot-lessonbox>li').on('mouseenter', function() {
            $('<div>').css({ 'width': '235px', 'height': '130px', 'position': 'absolute', 'top': 0, 'left': 0, 'background': 'rgba(0,0,0,.2)' }).appendTo($(this).children('a'));
            $(this).find('.playericon').fadeIn('2000');
            $(this).find('.hide').slideDown('fast');
        });
        $('.hot-lessonbox>li').on('mouseleave', function() {
            $(this).children('a').find('div').remove();
            $(this).find('.playericon').fadeOut('2000');
            $(this).find('.hide').slideUp('fast');
        });
    }
});
