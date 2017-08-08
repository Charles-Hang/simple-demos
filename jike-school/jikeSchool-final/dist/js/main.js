define("goTop",["jquery.min"],function(require,exports,module){var $=require("jquery.min"),e=null,t=!0;exports.goTop=function(){$(window).on("scroll",function(){$(".back-top").fadeIn("2000"),0==$(window).scrollTop()&&$(".back-top").fadeOut("1000"),t||clearInterval(e),t=!1}),$(".back-top").on("click",function(){e=setInterval(function(){var o=$(window).scrollTop(),s=Math.floor(-o/5);$(window).scrollTop(o+s),t=!0,0==o&&(clearInterval(e),$(".back-top").hide())},30)})}}),define("slide",["jquery.min"],function(require,exports,module){var $=require("jquery.min");exports.slide=function(){$(".nav-left").on("mouseenter",function(){$(".panel").stop(!0).slideDown("1000")}),$(".nav-left").on("mouseleave",function(){$(".panel").slideUp("1000")}),$(".lesson-nav>li").on("mouseenter",function(){$(this).children(".lesson-list").stop(!0).show("1000")}),$(".lesson-nav>li").on("mouseleave",function(){$(this).children(".lesson-list").hide("1000")}),$(".recommend-move").on("mouseenter",function(){switch($(".recommend-move-list").slideDown("1000"),$(this).attr("class")){case"recommend-move question":$(".stable,.all-content").removeAttr("style"),$(".stable.question").css("border-bottom","0"),$(".question-content").css("display","block");break;case"recommend-move wiki":$(".stable,.all-content").removeAttr("style"),$(".stable.wiki").css("border-bottom","0"),$(".wiki-content").css("display","block");break;case"recommend-move course":$(".stable,.all-content").removeAttr("style"),$(".stable.course").css("border-bottom","0"),$(".course-content").css("display","block");break;default:$(".stable,.all-content").removeAttr("style"),$(".stable.group").css("border-bottom","0"),$(".group-content").css("display","block")}}),$(".recommend-move-list").on("mouseleave",function(){$(this).stop(!0).slideUp("1000")}),$(".stable").on("mouseenter",function(){switch($(this).attr("class")){case"stable question":$(".stable,.all-content").removeAttr("style"),$(".stable.question").css("border-bottom","0"),$(".question-content").css("display","block");break;case"stable wiki":$(".stable,.all-content").removeAttr("style"),$(".stable.wiki").css("border-bottom","0"),$(".wiki-content").css("display","block");break;case"stable course":$(".stable,.all-content").removeAttr("style"),$(".stable.course").css("border-bottom","0"),$(".course-content").css("display","block");break;default:$(".stable,.all-content").removeAttr("style"),$(".stable.group").css("border-bottom","0"),$(".group-content").css("display","block")}}),$(".close").on("click",function(){$(".fixed1").slideUp("1000")})}}),define("tab",["jquery.min"],function(require,exports,module){var $=require("jquery.min");exports.tab=function(){$(".hot-lesson>li").on("mouseenter",function(){$(".hot-lesson>li").removeClass("hot-lesson-hover"),$(".hot-lesson>li").children().removeAttr("style"),$(this).addClass("hot-lesson-hover"),$(this).children().css("display","block")}),$(".hot-lessonbox>li").on("mouseenter",function(){$("<div>").css({width:"235px",height:"130px",position:"absolute",top:0,left:0,background:"rgba(0,0,0,.2)"}).appendTo($(this).children("a")),$(this).find(".playericon").fadeIn("2000"),$(this).find(".hide").slideDown("fast")}),$(".hot-lessonbox>li").on("mouseleave",function(){$(this).children("a").find("div").remove(),$(this).find(".playericon").fadeOut("2000"),$(this).find(".hide").slideUp("fast")})}}),define("playM",["jquery.min"],function(require,exports,module){var $=require("jquery.min"),e=null;exports.index=1,exports.moveRight=function(e,t,o){function s(){if(parseInt($(e).css("left"))>n)$(e).css("left",parseInt($(e).css("left"))+a+"px"),setTimeout(s,l);else{$(e).css("left",n+"px");var i=-o*t;parseInt($(e).css("left"))<i&&$(e).css("left","-"+t+"px")}}var n=parseInt($(e).css("left"))-t,i=300,l=5,a=-t/(i/l);s()},exports.moveLeft=function(e,t,o){function s(){if(parseInt($(e).css("left"))<n)$(e).css("left",parseInt($(e).css("left"))+a+"px"),setTimeout(s,l);else{$(e).css("left",n+"px");var i=-t;parseInt($(e).css("left"))>i&&$(e).css("left","-"+o*t+"px")}}var n=parseInt($(e).css("left"))+t,i=300,l=5,a=t/(i/l);s()},exports.offsetLeft=function(e,t,o){function s(){if(parseInt($(e).css("left"))<n)$(e).css("left",parseInt($(e).css("left"))+a+"px"),setTimeout(s,l);else{$(e).css("left",n+"px");var i=-560;parseInt($(e).css("left"))>i&&$(e).css("left","-"+o*t+"px")}}var n=parseInt($(e).css("left"))+t,i=300,l=5,a=t/(i/l);s()},exports.highLight=function(){var e=$(".pn-index");exports.index>6&&(exports.index=1),exports.index<1&&(exports.index=6),$(e).removeClass("light"),$(e[exports.index-1]).addClass("light")},exports.play=function(){e=setInterval(function(){exports.index+=1,exports.highLight(),exports.moveRight(".focus-wrap",$(".focus-wrap>a").width(),6)},2500)},exports.stopPlay=function(){clearInterval(e)}}),define("playPhoto",["jquery.min","playM"],function(require,exports,module){var $=require("jquery.min"),e=require("playM");exports.playPhoto=function(){console.log(e.index),$(".banner-left").on("click",function(){e.index-=1,e.highLight(),e.moveLeft(".focus-wrap",$(".focus-wrap>a").width(),6)}),$(".banner-right").on("click",function(){e.index+=1,e.highLight(),$(".focus-wrap").stop(!0,!0),e.moveRight(".focus-wrap",$(".focus-wrap>a").width(),6)}),$(".pn-index").on("click",function(){if(!$(this).hasClass("light")){$(".pn-index").removeClass("light"),$(this).addClass("light");var t=parseInt($(this).attr("index"));if(t>e.index){var o=$(".focus-wrap>a").width()*(t-e.index);e.moveRight(".focus-wrap",o,6)}else{var o=$(".focus-wrap>a").width()*(e.index-t);console.log(o),e.offsetLeft(".focus-wrap",o,6)}e.index=t}}),$(".focus-banner").on("mouseover",e.stopPlay),$(".focus-banner").on("mouseleave",e.play),$(".work-left").on("click",function(){e.moveLeft(".work-list",$(".work-list>li").width(),5)}),$(".work-right").on("click",function(){$(".strategy-box.oper").stop(!0,!0),e.moveRight(".work-list",$(".work-list>li").width(),5)}),$(".strategy-left.oper").on("click",function(){e.moveLeft(".strategy-box.oper",$(".strategy-box.oper>a").width(),5)}),$(".strategy-right.oper").on("click",function(){$(".strategy-box.oper").stop(!0,!0),e.moveRight(".strategy-box.oper",$(".strategy-box.oper>a").width(),5)}),$(".strategy-left.medi").on("click",function(){e.moveLeft(".strategy-box.medi",$(".strategy-box.medi>a").width(),5)}),$(".strategy-right.medi").on("click",function(){$(".strategy-box.medi").stop(!0,!0),e.moveRight(".strategy-box.medi",$(".strategy-box.medi>a").width(),5)}),e.play()}}),define("main",["slide","tab","goTop","playPhoto"],function(require){var e=require("slide"),t=require("tab"),o=require("goTop"),s=require("playPhoto");e.slide(),t.tab(),o.goTop(),s.playPhoto()}),seajs.use("main");