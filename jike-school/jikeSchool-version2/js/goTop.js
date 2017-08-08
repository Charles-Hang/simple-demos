//回到顶部模块
define(function(require, exports, module) {
    var $ = require('jquery.min');
    var timer = null;
    var isTop = true;
    exports.goTop = function() {
        $(window).on('scroll', function() {
            $('.back-top').fadeIn('2000');
            if ($(window).scrollTop() == 0) {
                $('.back-top').fadeOut('1000');
            }
            if (!isTop) {
                clearInterval(timer);
            }
            isTop = false;
        });
        //给回到顶部按钮绑定事件
        $('.back-top').on('click', function() {
            timer = setInterval(function() {
                var scrollTop = $(window).scrollTop();
                var speed = Math.floor(-scrollTop / 5);
                $(window).scrollTop(scrollTop + speed);
                isTop = true;
                if (scrollTop == 0) {
                    clearInterval(timer);
                    $('.back-top').hide();
                }
            }, 30)
        });
    }
});
