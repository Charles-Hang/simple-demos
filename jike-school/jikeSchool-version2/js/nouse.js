//模块化之前的js文件，已废弃，保留纪念

//定义两个定时器
var timer = null;
var timer2 = null;
//滚动条是否到顶
var isTop = true;
//给头部导航栏绑定事件
$('.nav-left').on('mouseenter',function(){
	$('.panel').stop(true).slideDown('1000');
});
$('.nav-left').on('mouseleave',function(){
	$('.panel').slideUp('1000');
});
//给课程目录绑定事件
$('.lesson-nav>li').on('mouseenter',function(){
	$(this).children('.lesson-list').stop(true).show('1000');
});
$('.lesson-nav>li').on('mouseleave',function(){
	$(this).children('.lesson-list').hide('1000');
});
//给右侧推荐栏绑定事件
$('.recommend-move').on('mouseenter',function(){
	$('.recommend-move-list').slideDown('1000');
	switch($(this).attr('class')) {
		case 'recommend-move question':
			$('.stable,.all-content').removeAttr('style');
			$('.stable.question').css('border-bottom','0');
			$('.question-content').css('display','block');
			break;
		case 'recommend-move wiki':
			$('.stable,.all-content').removeAttr('style');
			$('.stable.wiki').css('border-bottom','0');
			$('.wiki-content').css('display','block');
			break;
		case 'recommend-move course':
			$('.stable,.all-content').removeAttr('style');
			$('.stable.course').css('border-bottom','0');
			$('.course-content').css('display','block');
			break;
		default:
			$('.stable,.all-content').removeAttr('style');
			$('.stable.group').css('border-bottom','0');
			$('.group-content').css('display','block');
			break;
	}
});
$('.recommend-move-list').on('mouseleave',function(){
	$(this).stop(true).slideUp('1000');
});
//给右侧推荐栏里的小标题绑定事件
$('.stable').on('mouseenter',function(){
	switch($(this).attr('class')) {
		case 'stable question':
			$('.stable,.all-content').removeAttr('style');
			$('.stable.question').css('border-bottom','0');
			$('.question-content').css('display','block');
			break;
		case 'stable wiki':
			$('.stable,.all-content').removeAttr('style');
			$('.stable.wiki').css('border-bottom','0');
			$('.wiki-content').css('display','block');
			break;
		case 'stable course':
			$('.stable,.all-content').removeAttr('style');
			$('.stable.course').css('border-bottom','0');
			$('.course-content').css('display','block');
			break;
		default:
			$('.stable,.all-content').removeAttr('style');
			$('.stable.group').css('border-bottom','0');
			$('.group-content').css('display','block');
			break;
	}		
});
//给热门课程tab绑定事件
$('.hot-lesson>li').on('mouseenter',function(){
	$('.hot-lesson>li').removeClass('hot-lesson-hover');
	$('.hot-lesson>li').children().removeAttr('style');
	$(this).addClass('hot-lesson-hover');
	$(this).children().css('display','block');
});
//给热门课程里的卡片绑定事件
$('.hot-lessonbox>li').on('mouseenter',function(){
	$('<div>').css({'width':'235px','height':'130px','position':'absolute','top':0,'left':0,'background':'rgba(0,0,0,.2)'}).appendTo($(this).children('a'));
	$(this).find('.playericon').fadeIn('2000');
	$(this).find('.hide').slideDown('fast');
});
$('.hot-lessonbox>li').on('mouseleave',function(){
	$(this).children('a').find('div').remove();
	$(this).find('.playericon').fadeOut('2000');
	$(this).find('.hide').slideUp('fast');
});
//鼠标滚动触发事件
$(window).on('scroll',function(){
	$('.back-top').fadeIn('2000');
	if ($(window).scrollTop()==0) {
		$('.back-top').fadeOut('1000');
	}
	if (!isTop) {
		clearInterval(timer);
	}
	isTop = false;
});
//给回到顶部按钮绑定事件
$('.back-top').on('click',function(){
	timer = setInterval (function(){
		var scrollTop = $(window).scrollTop();
		var speed = Math.floor(-scrollTop/5);
		$(window).scrollTop(scrollTop+speed);
		isTop = true;
		if(scrollTop==0){
			clearInterval(timer);
			$('.back-top').hide();
		}
	},30)
});
//目前显示的图索引
var index = 1;
//给轮播图部分绑定事件
$('.banner-left').on('click',function(){
	index -= 1;
	highLight();
	moveLeft('.focus-wrap',$('.focus-wrap>a').width(),6);

});
$('.banner-right').on('click',function(){
	index += 1;
	highLight();
	$('.focus-wrap').stop(true,true);
	moveRight('.focus-wrap',$('.focus-wrap>a').width(),6);
});
$('.pn-index').on('click',function(){
	if ($(this).hasClass('light')) {
		return;
	}
	$('.pn-index').removeClass('light');
	$(this).addClass('light');
	var myIndex = parseInt($(this).attr('index'));
	if (myIndex > index) {
		var offset = $('.focus-wrap>a').width()*(myIndex - index);
		moveRight('.focus-wrap',offset,6);
	}else{
		var offset = $('.focus-wrap>a').width()*(index - myIndex);
		console.log(offset);
		offsetLeft('.focus-wrap',offset,6);
	}
	index = myIndex;
});
$('.focus-banner').on('mouseover',stopPlay);
$('.focus-banner').on('mouseleave',play);
//就业班轮播图事件
$('.work-left').on('click',function(){
	moveLeft('.work-list',$('.work-list>li').width(),5);

});
$('.work-right').on('click',function(){
	$('.strategy-box.oper').stop(true,true);
	moveRight('.work-list',$('.work-list>li').width(),5);
});
//战略合作企业轮播图事件
$('.strategy-left.oper').on('click',function(){
	moveLeft('.strategy-box.oper',$('.strategy-box.oper>a').width(),5);

});
$('.strategy-right.oper').on('click',function(){
	$('.strategy-box.oper').stop(true,true);
	moveRight('.strategy-box.oper',$('.strategy-box.oper>a').width(),5);
});
//媒体报到轮播图事件
$('.strategy-left.medi').on('click',function(){
	moveLeft('.strategy-box.medi',$('.strategy-box.medi>a').width(),5);

});
$('.strategy-right.medi').on('click',function(){
	$('.strategy-box.medi').stop(true,true);
	moveRight('.strategy-box.medi',$('.strategy-box.medi>a').width(),5);
});
//轮播图右移函数，name为图框名，width为图宽，n为图数,参数均为必须
function moveRight(name,width,n){
	var newLeft = parseInt($(name).css('left'))-width;
	var time = 300;//位移总时间
	var interval = 5;//位移间隔时间
	var speed = -width/(time/interval);//每次位移量
	function go(){
		if ( parseInt($(name).css('left')) > newLeft) {
			$(name).css('left',parseInt($(name).css('left'))+speed+'px');
			setTimeout(go,interval);
		}else{
			$(name).css('left',newLeft+'px');
			var w = -n*width;
			if (parseInt($(name).css('left'))<w) {
				$(name).css('left','-'+width+'px');
			}
		}
	}
	go();
}
//轮播图左移函数，name为图框名，width为图宽，n为图数
function moveLeft(name,width,n){
	var newLeft = parseInt($(name).css('left'))+width;
	var time = 300;//位移总时间
	var interval = 5;//位移间隔时间
	var speed = width/(time/interval);//每次位移量
	function go(){
		if ( parseInt($(name).css('left')) < newLeft) {
			$(name).css('left',parseInt($(name).css('left'))+speed+'px');
			setTimeout(go,interval);
		}else{
			$(name).css('left',newLeft+'px');
			var w = -width;
			if(parseInt($(name).css('left'))>w){
				$(name).css('left','-'+n*width+'px');
			}
		}
	}
	go();
}
//左偏移函数
function offsetLeft(name,width,n){
	var newLeft = parseInt($(name).css('left'))+width;
	var time = 300;//位移总时间
	var interval = 5;//位移间隔时间
	var speed = width/(time/interval);//每次位移量
	function go(){
		if ( parseInt($(name).css('left')) < newLeft) {
			$(name).css('left',parseInt($(name).css('left'))+speed+'px');
			setTimeout(go,interval);
		}else{
			$(name).css('left',newLeft+'px');
			var w = -560;
			if(parseInt($(name).css('left'))>w){
				$(name).css('left','-'+n*width+'px');
			}
		}
	}
	go();
}
//高亮对应图索引按钮
function highLight(){
	var pnIndex = $('.pn-index');
	if (index>6) {
		index = 1;
	}
	if (index<1) {
		index = 6;
	}
	$(pnIndex).removeClass('light');
	$(pnIndex[index-1]).addClass('light');
}
//自动播放轮播图函数
function play(){
	timer2 = setInterval(function(){
		index += 1;
		highLight();
		moveRight('.focus-wrap',$('.focus-wrap>a').width(),6);
	},2500);
}
play();
//停止播放轮播图函数
function stopPlay(){
	clearInterval(timer2);
}