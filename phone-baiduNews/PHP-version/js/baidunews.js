//当前新闻页
var page = 0;
//新闻类型
var newsType = 'recommend';
//默认加载推荐新闻
ajax();
//为第一个新闻选项绑定默认事件
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
$('.news-item').on('click',function(){
	$('.news-item').find('span').removeAttr('style');
	$(this).find('span').css({
		'border-bottom':'1px solid #fff',
		'padding-bottom':'4px'
	});
});
//点击不同新闻，加载对应新闻
$('#recommend').on('click',function(){
	newsType = 'recommend';
	$('.container').empty();
	page = 0;
	$('.get-more').show();
	ajax();
});
$('#hundred').on('click',function(){
	newsType = 'hundred';
	$('.container').empty();
	page = 0;
	$('.get-more').show();
	ajax();
});
$('#local').on('click',function(){
	newsType = 'local';
	$('.container').empty();
	page = 0;
	$('.get-more').show();
	ajax();
});
$('#image').on('click',function(){
	newsType = 'image';
	$('.container').empty();
	page = 0;
	$('.get-more').show();
	ajax();
});
$('.get-more').on('click',function(){
	ajax();
	if (page == 1) {
		$(this).hide();
	}
});
//新闻右下角类型框样式判断
function typeStyle(type){
	if (type.indexOf('置顶') != -1||type.indexOf('热点') != -1||type.indexOf('网易') != -1||type.indexOf('搜狐') != -1||type.indexOf('新浪') != -1||type.indexOf('百家') != -1) {
		if (type == '') {
			return 'news-type bg-red bd-clear';
		}else{
			return 'news-type bg-red';
		}
	}else if(type.indexOf('猜你喜欢') != -1||type.indexOf('独家') != -1){
		if (type == '') {
			return 'news-type bg-blue bd-clear';
		}else{
			return 'news-type bg-blue';
		}
	}else{
		if (type == '') {
			return 'news-type bd-clear';
		}else{
			return 'news-type';
		}
	}
}
//ajax请求新闻函数
function ajax(){
	$.ajax({
		type: 'GET',
		url: './baidunews.php',
		data: {
			page: page,
			type: newsType
		},
		dataType: 'json',
		success: function(data){
			page++;
			$.each(data, function(index,value){
				if (value.img1&&value.img1 != '') {
					if (value.img3 == '') {
						$('<div>').addClass('news-box').attr('data-url',value.url).on('click',function(){
							window.open($(this).attr('data-url'));
						}).appendTo($('.container'));
						$('<img>').addClass('single-img').attr('src',value.img1).appendTo($('.news-box').last());
						$('<div>').addClass('news-text height-s').css('max-width','calc(100% - 107px)').appendTo($('.news-box').last());
						$('<h1>').html(value.title).appendTo($('.news-text').last());
						$('<p>').addClass('news-des').html(value.description).appendTo($('.news-text').last());
						$('<span>').addClass('news-time').html(value.time).appendTo($('.news-box').last());
						$('<span>').addClass(function(){
							var style = typeStyle(value.type);
							return style;
						}).html(value.type).appendTo($('.news-box').last());
					}else{
						$('<div>').addClass('news-box').attr('data-url',value.url).on('click',function(){
							window.open($(this).attr('data-url'));
						}).appendTo($('.container'));
						$('<div>').addClass('news-text height-s').appendTo($('.news-box').last());
						$('<h1>').html(value.title).appendTo($('.news-text').last());
						$('<img>').addClass('tri-img first').attr('src',value.img1).appendTo($('.news-box').last());
						$('<img>').addClass('tri-img second').attr('src',value.img2).appendTo($('.news-box').last());
						$('<img>').addClass('tri-img last').attr('src',value.img3).appendTo($('.news-box').last());
						$('<span>').addClass('news-time').html(value.time).appendTo($('.news-box').last());
						$('<span>').addClass(function(){
							var style = typeStyle(value.type);
							return style;
						}).html(value.type).appendTo($('.news-box').last());
					}
				}else if(value.description){
					$('<div>').addClass('news-box').attr('data-url',value.url).on('click',function(){
						window.open($(this).attr('data-url'));
					}).appendTo($('.container'));
					$('<div>').addClass('news-text height-l').appendTo($('.news-box').last());
					$('<h1>').html(value.title).appendTo($('.news-text').last());
					$('<span>').addClass('news-des').html(value.description).appendTo($('.news-text').last());
					$('<span>').addClass('news-time').html(value.time).appendTo($('.news-box').last());
					$('<span>').addClass(function(){
						var style = typeStyle(value.type);
						return style;
					}).html(value.type).appendTo($('.news-box').last());
				}else{
					$('<div>').addClass('news-box-img').attr('data-url',value.url).on('click',function(){
						window.open($(this).attr('data-url'));
					}).appendTo($('.container'));
					$('<img>').addClass('news-img').attr('src',value.img).appendTo($('.news-box-img').last());
					$('<div>').addClass('praise').html(value.praise).appendTo($('.news-box-img').last());
					$('<h2>').html(value.title).appendTo($('.news-box-img').last());
				}
			});	
		}
	});
}