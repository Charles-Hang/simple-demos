//当前新闻页
var page = 0;
//新闻类型
var newsType = 'recommend';
//为第一个新闻选项绑定默认事件
ajax();
$('.news-item').first().find('span').css({
    'border-bottom': '1px solid #fff',
    'padding-bottom': '4px'
});
//为更多按钮绑定事件
$('.news-more').on('click', function() {
    $(this).hide();
    $('header').animate({
        height: '250px'
    }, 500);
});
//为收起按钮绑定事件
$('.slide-up').on('click', function() {
    setTimeout("$('.news-more').show()", 500);
    $('header').animate({
        height: '82px'
    }, 500);
});
//滚动事件，回到顶部
$(window).scroll(function() {
    if ($(window).scrollTop() > 250) {
        $('.gotop').show();
    }
    if ($(window).scrollTop() == 0) {
        $('.gotop').hide();
    }
    $('.gotop').on('click', function() {
        $(window).scrollTop(0);
        $('.gotop').hide();
    });
});
//为新闻选项绑定事件
$('.news-item').on('click', function() {
    $('.news-item').find('span').removeAttr('style');
    $(this).find('span').css({
        'border-bottom': '1px solid #fff',
        'padding-bottom': '4px'
    });
});
//点击不同新闻，加载对应新闻
$('#recommend').on('click', function() {
    newsType = 'recommend';
    $('.container').empty();
    page = 0;
    $('.get-more').show();
    ajax();
});
$('#hundred').on('click', function() {
    newsType = 'hundred';
    $('.container').empty();
    page = 0;
    $('.get-more').show();
    ajax();
});
$('#local').on('click', function() {
    newsType = 'local';
    $('.container').empty();
    page = 0;
    $('.get-more').show();
    ajax();
});
$('#image').on('click', function() {
    newsType = 'image';
    $('.container').empty();
    page = 0;
    $('.get-more').show();
    ajax();
});
$('.get-more').on('click', function() {
    ajax();
    if (page == 1) {
        $(this).hide();
    }
});
//ajax请求新闻函数
function ajax() {
    $.ajax({
        type: 'GET',
        url: './users',
        data: {
            page: page,
            type: newsType
        },
        dataType: 'html',
        success: function(data) {
            page++;
            var html = $('.container').html() + data;
            $('.container').html(html);
        }
    });
}
