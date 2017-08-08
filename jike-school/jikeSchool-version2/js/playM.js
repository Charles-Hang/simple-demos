//轮播图函数模块
define(function(require, exports, module) {
    var $ = require('jquery.min');
    var timer2 = null;
    exports.index = 1;
    //轮播图右移函数，name为图框名，width为图宽，n为图数,参数均为必须
    exports.moveRight = function(name, width, n) {
            var newLeft = parseInt($(name).css('left')) - width;
            var time = 300; //位移总时间
            var interval = 5; //位移间隔时间
            var speed = -width / (time / interval); //每次位移量
            function go() {
                if (parseInt($(name).css('left')) > newLeft) {
                    $(name).css('left', parseInt($(name).css('left')) + speed + 'px');
                    setTimeout(go, interval);
                } else {
                    $(name).css('left', newLeft + 'px');
                    var w = -n * width;
                    if (parseInt($(name).css('left')) < w) {
                        $(name).css('left', '-' + width + 'px');
                    }
                }
            }
            go();
        }
        //轮播图左移函数，name为图框名，width为图宽，n为图数
    exports.moveLeft = function(name, width, n) {
            var newLeft = parseInt($(name).css('left')) + width;
            var time = 300; //位移总时间
            var interval = 5; //位移间隔时间
            var speed = width / (time / interval); //每次位移量
            function go() {
                if (parseInt($(name).css('left')) < newLeft) {
                    $(name).css('left', parseInt($(name).css('left')) + speed + 'px');
                    setTimeout(go, interval);
                } else {
                    $(name).css('left', newLeft + 'px');
                    var w = -width;
                    if (parseInt($(name).css('left')) > w) {
                        $(name).css('left', '-' + n * width + 'px');
                    }
                }
            }
            go();
        }
        //左偏移函数
    exports.offsetLeft = function(name, width, n) {
            var newLeft = parseInt($(name).css('left')) + width;
            var time = 300; //位移总时间
            var interval = 5; //位移间隔时间
            var speed = width / (time / interval); //每次位移量
            function go() {
                if (parseInt($(name).css('left')) < newLeft) {
                    $(name).css('left', parseInt($(name).css('left')) + speed + 'px');
                    setTimeout(go, interval);
                } else {
                    $(name).css('left', newLeft + 'px');
                    var w = -560;
                    if (parseInt($(name).css('left')) > w) {
                        $(name).css('left', '-' + n * width + 'px');
                    }
                }
            }
            go();
        }
        //高亮对应图索引按钮
    exports.highLight = function() {
            var pnIndex = $('.pn-index');
            if (exports.index > 6) {
                exports.index = 1;
            }
            if (exports.index < 1) {
                exports.index = 6;
            }
            $(pnIndex).removeClass('light');
            $(pnIndex[exports.index - 1]).addClass('light');
        }
        //自动播放轮播图函数
    exports.play = function() {
            timer2 = setInterval(function() {
                exports.index += 1;
                exports.highLight();
                exports.moveRight('.focus-wrap', $('.focus-wrap>a').width(), 6);
            }, 2500);
        }
        //停止播放轮播图函数
    exports.stopPlay = function() {
        clearInterval(timer2);
    }
});
