//轮播图模块
define(function(require, exports, module) {
    var $ = require('jquery.min');
    var playM = require('playM.js');
    exports.playPhoto = function() {
    	console.log(playM.index);
        //给轮播图部分绑定事件
        $('.banner-left').on('click', function() {
            playM.index -= 1;
            playM.highLight();
            playM.moveLeft('.focus-wrap', $('.focus-wrap>a').width(), 6);

        });
        $('.banner-right').on('click', function() {
            playM.index += 1;
            playM.highLight();
            $('.focus-wrap').stop(true, true);
            playM.moveRight('.focus-wrap', $('.focus-wrap>a').width(), 6);
        });
        $('.pn-index').on('click', function() {
            if ($(this).hasClass('light')) {
                return;
            }
            $('.pn-index').removeClass('light');
            $(this).addClass('light');
            var myIndex = parseInt($(this).attr('index'));
            if (myIndex > playM.index) {
                var offset = $('.focus-wrap>a').width() * (myIndex - playM.index);
                playM.moveRight('.focus-wrap', offset, 6);
            } else {
                var offset = $('.focus-wrap>a').width() * (playM.index - myIndex);
                console.log(offset);
                playM.offsetLeft('.focus-wrap', offset, 6);
            }
            playM.index = myIndex;
        });
        $('.focus-banner').on('mouseover', playM.stopPlay);
        $('.focus-banner').on('mouseleave', playM.play);
        //就业班轮播图事件
        $('.work-left').on('click', function() {
            playM.moveLeft('.work-list', $('.work-list>li').width(), 5);

        });
        $('.work-right').on('click', function() {
            $('.strategy-box.oper').stop(true, true);
            playM.moveRight('.work-list', $('.work-list>li').width(), 5);
        });
        //战略合作企业轮播图事件
        $('.strategy-left.oper').on('click', function() {
            playM.moveLeft('.strategy-box.oper', $('.strategy-box.oper>a').width(), 5);

        });
        $('.strategy-right.oper').on('click', function() {
            $('.strategy-box.oper').stop(true, true);
            playM.moveRight('.strategy-box.oper', $('.strategy-box.oper>a').width(), 5);
        });
        //媒体报到轮播图事件
        $('.strategy-left.medi').on('click', function() {
            playM.moveLeft('.strategy-box.medi', $('.strategy-box.medi>a').width(), 5);

        });
        $('.strategy-right.medi').on('click', function() {
            $('.strategy-box.medi').stop(true, true);
            playM.moveRight('.strategy-box.medi', $('.strategy-box.medi>a').width(), 5);
        });
        playM.play();
    }
});
