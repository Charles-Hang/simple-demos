//换肤按钮
var changeSkins =document.getElementById('changeskin');
//颜色按钮容器
var colors = document.getElementById('skin-item');
//颜色按钮
var color = colors.children;
//当前皮肤颜色 默认为绿
var skinColor = 'green';
//头部设为首页模块
var setFirst = document.getElementById('set-first');
//搜索栏
var searchBox = document.getElementById('search-box');
var topBox = getTop(searchBox);
//搜索类型容器
var searchType = document.getElementById('search-type');
//搜索类型
var tab = document.getElementById('tab');
//搜索类型下拉框
var tabs = document.getElementById('tabs');
//搜索类型下拉框选项
var tabsTab = document.getElementsByClassName('tabs-tab');
//快捷滚动新闻小点
var scrollDot = document.getElementById('scroll-dot');
//主体导航栏
var navType = document.getElementById('nav-type');
//导航栏的字
var navFonts = document.getElementsByClassName('nav-font');
//权威推荐栏
var navAuthority = document.getElementById('nav-authority');
//左侧索引容器
var leftInfo = document.getElementsByClassName('left-info')[0];
//左侧工具箱
var toolsBox = document.getElementById('tools-box');
//工具箱开合键
var toolsArrow = document.getElementById('tools-arrow');
//右侧常用索引容器
var ofIndex = document.getElementById('often-index');
//右侧兴趣索引容器
var inIndex = document.getElementById('interest-index');
//右侧兴趣索引标题
var inFont = document.getElementsByClassName('interest-font');
//右侧兴趣索引副标题
var inFl = document.getElementsByClassName('interest-fl');
//左侧新闻分类容器
var newsItems = document.getElementById('left-news-item');
//左侧新闻分类条目
var newsItem = newsItems.children;
//左侧新闻分类条目的字的集
var newsItemFonts = document.getElementsByClassName('news-item-fonts');
//左侧新闻索引容器
var leftNews = document.getElementById('left-news');
//左侧新闻索引条目
var leftNew = leftNews.children;
//搜索框右侧滚动新闻
var scrollNew = document.getElementById('scroll-new');
//滚动新闻向左按钮
var scrollLeft = document.getElementById('scroll-left');
//为换肤按钮绑定事件
changeSkins.addEventListener('click',openColor,false);
//为颜色按钮绑定事件
for (var i = 0; i < color.length; i++) {
	color[i].addEventListener('click',function(){
		changeSkin(this.title);
		openColor();
	},false);
}
//为切换左侧新闻分类按钮绑定事件
for (var i = 0; i < newsItem.length; i++) {
	newsItem[i].addEventListener('click',changeNewsBd,false);
}
for (var i = 0; i < newsItemFonts.length; i++) {
	newsItemFonts[i].addEventListener('click',changeNewsFt,false);
}
//为滚动新闻按钮绑定事件
scrollLeft.addEventListener('click',newsLeft,false);
//为导航栏选项绑定事件
for (var i = 0; i < navFonts.length; i++) {
	navFonts[i].addEventListener('click',changeBg,false);
}
//为搜索类型容器绑定事件
searchType.addEventListener('click',whatTab,false);
//为搜索类型选项绑定事件
for (var i = 0; i < tabsTab.length; i++) {
	tabsTab[i].addEventListener('click',changeTab,false);
}
//为工具箱开合按键绑定事件
toolsArrow.addEventListener('click',changeTool,false);
//自动读取上次皮肤颜色进行换肤
function autoChange(){
	if (localStorage.getItem('skinColor')) {
		skinColor=localStorage.getItem('skinColor');
		changeSkin(skinColor);
	}
}
autoChange();
//改变左侧新闻选项的边框
function changeNewsBd() {
	for (var i = 0; i < newsItem.length; i++) {
		newsItem[i].removeAttribute('class');
		leftNew[i].removeAttribute('style');
	}
	this.setAttribute('class','bd-'+skinColor);
	leftNew[this.title-1].style="display:block";
}
//改变左侧新闻选项的字体
function changeNewsFt() {
	for (var i = 0; i < newsItemFonts.length; i++) {
		newsItemFonts[i].setAttribute('class','news-item-fonts');
	}
	this.setAttribute('class','news-item-fonts font-'+skinColor);
}
//换肤
function changeSkin(color) {
	//向localStorage里记录皮肤颜色信息
	localStorage.setItem('skinColor',color);
	skinColor=color;
	setFirst.setAttribute('class','bg-'+color);
	scrollDot.setAttribute('class','bg-'+color+' bd-'+color);
	navType.setAttribute('class','bg-'+color+' bd-'+color);
	navAuthority.setAttribute('class','bd-'+color);
	leftInfo.setAttribute('class','left-info bd-'+color);
	ofIndex.setAttribute('class','bd-'+color);
	inIndex.setAttribute('class','bd-'+color);
	for (var i = 0; i < inFont.length; i++) {
		inFont[i].setAttribute('class','interest-font font-'+color);
	}
	for (var i = 0; i < inFl.length; i++) {
		inFl[i].setAttribute('class','interest-fl font-'+color);
	}
	for (var i = 0; i < newsItem.length; i++) {
		if (newsItem[i].className=='bd-green'||newsItem[i].className=='bd-blue'||newsItem[i].className=='bd-pink'||newsItem[i].className=='bd-black') {
			newsItem[i].setAttribute('class','bd-'+color);
		}
		if (newsItemFonts[i].className=='news-item-fonts font-green'||newsItemFonts[i].className=='news-item-fonts font-pink'||newsItemFonts[i].className=='news-item-fonts font-blue'||newsItemFonts[i].className=='news-item-fonts font-black') {
			newsItemFonts[i].setAttribute('class','news-item-fonts font-'+color);
		}
	}
}
//搜索框右侧滚动新闻定时器，每各三秒变一次
setInterval(function(){
	scrollNew.style.left=parseInt(scrollNew.style.left)-170+'px';
	if (parseInt(scrollNew.style.left)<-1519) {
		scrollNew.style.left=11+'px';
	}
},3000);
//手动滚动新闻
function newsLeft(){
	scrollNew.style.left=parseInt(scrollNew.style.left)-170+'px';
	if (parseInt(scrollNew.style.left)<-1519) {
		scrollNew.style.left=11+'px';
	}
}
//改变导航栏背景，点击变白
function changeBg(){
	for (var i = 0; i < navFonts.length; i++) {
		navFonts[i].setAttribute('class','nav-font');
	}
	this.setAttribute('class','nav-font nav-click');
}
//搜索框搜索类型框的开合
function whatTab(){
	if (this.className=='search-type') {
		this.setAttribute('class','search-type-open');
		tabs.setAttribute('style','display:block');
	} else {
		this.setAttribute('class','search-type');
		tabs.removeAttribute('style');
	}
}
//搜索类型框打开时，选择搜索类型，选完后关闭
function changeTab(){
	tab.innerHTML=this.innerHTML;
	searchType.setAttribute('class','search-type');
	tabs.removeAttribute('style');
}
//左侧工具箱的开合
function changeTool(){
	if (this.className=='tools-arrow') {
		this.setAttribute('class','tools-arrow tools-arrow-open');
		toolsBox.setAttribute('style','height:51px');
	} else {
		this.setAttribute('class','tools-arrow');
		toolsBox.removeAttribute('style');
	}
}
//换肤颜色按钮的显示
function openColor(){
	if (!color[0].style.height) {
		for (var i = 0; i < color.length; i++) {
			color[i].setAttribute('style','height:10px; border:1px');
		}
	}else{
		for (var i = 0; i < color.length; i++) {
			color[i].removeAttribute('style');
		}
	}
}
window.onscroll=function(){
	var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (bodyScrollTop > topBox){
		searchBox.setAttribute('style','position: fixed; top: 0px; z-index: 99; padding-bottom: 10px; padding-top: 10px; background: rgb(249, 249, 249);margin: 0;')
		navType.setAttribute('style','margin-top:110px;');
	} else {
		searchBox.removeAttribute('style');
		navType.removeAttribute('style');
	}
}
function getTop(e){ 
	var offset = e.offsetTop;
	if(e.offsetParent != null) offset += getTop(e.offsetParent);
	return offset;
}