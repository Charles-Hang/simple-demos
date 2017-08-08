//滑动菜单等模块
define(function(require, exports, module) {
    var $ = require('jquery.min');
    exports.slide = function() {
        //给头部导航栏绑定事件
        $('.nav-left').on('mouseenter', function() {
            $('.panel').stop(true).slideDown('1000');
        });
        $('.nav-left').on('mouseleave', function() {
            $('.panel').slideUp('1000');
        });
        //给课程目录绑定事件
        $('.lesson-nav>li').on('mouseenter', function() {
            $(this).children('.lesson-list').stop(true).show('1000');
        });
        $('.lesson-nav>li').on('mouseleave', function() {
            $(this).children('.lesson-list').hide('1000');
        });
        //给右侧推荐栏绑定事件
        $('.recommend-move').on('mouseenter', function() {
            $('.recommend-move-list').slideDown('1000');
            switch ($(this).attr('class')) {
                case 'recommend-move question':
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.question').css('border-bottom', '0');
                    $('.question-content').css('display', 'block');
                    break;
                case 'recommend-move wiki':
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.wiki').css('border-bottom', '0');
                    $('.wiki-content').css('display', 'block');
                    break;
                case 'recommend-move course':
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.course').css('border-bottom', '0');
                    $('.course-content').css('display', 'block');
                    break;
                default:
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.group').css('border-bottom', '0');
                    $('.group-content').css('display', 'block');
                    break;
            }
        });
        $('.recommend-move-list').on('mouseleave', function() {
            $(this).stop(true).slideUp('1000');
        });
        //给右侧推荐栏里的小标题绑定事件
        $('.stable').on('mouseenter', function() {
            switch ($(this).attr('class')) {
                case 'stable question':
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.question').css('border-bottom', '0');
                    $('.question-content').css('display', 'block');
                    break;
                case 'stable wiki':
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.wiki').css('border-bottom', '0');
                    $('.wiki-content').css('display', 'block');
                    break;
                case 'stable course':
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.course').css('border-bottom', '0');
                    $('.course-content').css('display', 'block');
                    break;
                default:
                    $('.stable,.all-content').removeAttr('style');
                    $('.stable.group').css('border-bottom', '0');
                    $('.group-content').css('display', 'block');
                    break;
            }
        });
        //给右侧固定广告绑定事件
        $('.close').on('click',function(){
        	$('.fixed1').slideUp('1000');
        });
    }
});
