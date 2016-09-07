$(window).on('load',function(){
	//是图片按瀑布流布局
	waterfall();
	//滚动加载的图片数据
	var dataInt = {'data':[{'src':'0.jpeg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpeg'},{'src':'8.jpg'},{'src':'9.jpg'}]};
	//滚动窗口
	$(window).on('scroll',function(){
		//判断是否符合加载条件
		if (checkScrollSlide()) {
			//遍历图片数据，为其创建html元素
			$.each(dataInt.data,function(key,value){
				var oBox = $('<div>').addClass('box').appendTo($('.main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				var oImg = $('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(oPic));
			});
			//使其按瀑布流布局
			waterfall();
		}
	});
	$(window).on('resize',function(){
		waterfall();
	});
});
//瀑布流布局函数
function waterfall(){
	var boxs = $('.main>div');
	var w = boxs.eq(0).outerWidth();
	//确定窗口能承载图片的列数
	var cols = Math.floor($(window).width()/w);
	//存放每列的高度
	var hArr = [];
	$('.main').width(w*cols).css('margin','0 auto');
	//遍历每个图片盒子为其定位
	boxs.each(function(index,value){
		value.style.cssText = '';
		var h = boxs.eq(index).outerHeight();
		if (index<cols) {
			//遍历第一行，预存每列高度
			hArr[index] = h;
		} else {
			//遍历其他，为其定位
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			});
			//定位结束，更新列高
			hArr[minHIndex] += boxs.eq(index).outerHeight();
		}
	});
}
//判断是否符合加载条件函数
function checkScrollSlide(){
	var lastBox = $('.main>div').last();
	var lastBoxDis = lastBox.offset().top + Math.floor(lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;
}
