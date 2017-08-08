//使用了单例模式和模块化模式，单例模式的好处是：提供了对唯一实例的受控访问，由于在系统内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象单例模式无疑可以提高系统的性能。
//模块化模式的好处是：有助于保持应用项目的代码单元既能清晰地分离又有组织。可以在一个单一的对象中包含公共/私有的方法和变量，从而从全局范围中屏蔽特定的部分。这个结果是可以减少我们的函数名称与在页面中其他脚本区域定义的函数名称冲突的可能性。
var head = (function() {
    var instance;

    function init() {
        //弹出盒子函数
        function showBox(id, e) {
            e.stopPropagation();
            $('#' + id).slideDown('3000');
        }
        return {
            showMsg: function() {
                //给消息按钮绑定事件
                $('#msg-btn').on('click', function(e) {
                    e.stopPropagation();
                    $('#msg-info').slideToggle('3000');
                });
            },
            showMorePro: function() {
                //给更多产品按钮绑定事件
                $('#more-pro').on('mouseover', function() {
                    showBox('more-con', event);
                });
                //给更多产品内容绑定事件
                $('#more-con').on('mouseover', function() {
                    $(window).on('scroll.moreCon', function() {
                        $(this).scrollTop(0);
                    });
                });
                $('#more-con').on('mouseleave', function(e) {
                    var moreCon = $('#more-con');
                    moreCon.hide('slow');
                    $(window).unbind('scroll.moreCon');
                });
            },
            showSkinBox: function() {
                //给换肤按钮绑定事件
                $('#skin-btn').on('click', function() {
                    showBox('skin-info', event);
                });
                $('.close-skinbox').on('click', function() {
                    $('#skin-info').slideUp('1000');
                });
            },
            hideBox: function() {
                //点击空白收回弹出框
                $(document.body).on('click', function(e) {
                    var skinInfo = $('#skin-info');
                    var msgInfo = $('#msg-info');
                    if (!skinInfo.is(e.target) && skinInfo.has(e.target).length === 0) {
                        skinInfo.slideUp("1000");
                    }
                    if (!msgInfo.is(e.target) && msgInfo.has(e.target).length === 0) {
                        msgInfo.slideUp("1000");
                    }
                });
            }
        };
    };
    return {

        // 如果存在获取此单例实例，如果不存在创建一个单例实例
        getInstance: function() {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };
})();

var skin = (function() {
    var instance;

    function init() {
        //换肤函数
        function changeSkin(url) {
            var w = $(window).width() + 'px';
            var h = $(window).height() + 'px';
            var wh = w + " " + h;
            $('#container').css({ 'background-image': url, 'background-attachment': 'fixed', 'background-size': wh });
            $('.baidulogo').css('display', 'none');
            $('.baidulogo2').css({'display': 'block','margin-top': '33px'});
            $('.weather,.fnc-menus>a,nav>a,.caption,.caption a,.user-info,.set-info,.back-top').css('color', '#fff');
            $('header').css('background', 'rgba(0,0,0,.2)');
        }
        //下次打开自动读取皮肤
        function autoSkin() {
            if (localStorage.getItem('skinImage')) {
                var url = localStorage.getItem('skinImage');
                changeSkin(url);
            }
        }
        return {
            change: function() {
                //给换肤图片绑定事件
                $('.skin-img').on('mouseover', function() {
                    var url = 'url(' + $(this).attr('src') + ')';
                    console.log(url);
                    $('.skin-pre').css({ 'background': url, 'background-repeat': 'no-repeat', 'background-size': '260px 163px' });
                });
                $('.skin-img').on('click', function() {
                    var url = 'url(' + $(this).attr('src') + ')';
                    localStorage.setItem('skinImage', url);
                    changeSkin(url);
                });
            },
            close: function() {
                //给不使用换肤按钮绑定事件
                $('.close-skin').on('click', function() {
                    $('#container,.weather,.fnc-menus>a,nav>a,.caption,.caption a,.user-info,.set-info,.back-top').removeAttr('style');
                    $('.baidulogo').css('display', 'block');
                    $('.baidulogo2').css('display', 'none');
                    $('header').removeAttr('style');
                    localStorage.removeItem('skinImage');
                });
            },
            resize: function() {
                //窗口宽度变化时背景图片自适应
                $(window).on('resize', function() {
                    var w = $(window).width();
                    if (w < 900) {
                        w = 900;
                    }
                    var h = $(window).height();
                    if (h < 600) {
                        h = 600;
                    }
                    var wh = w + 'px ' + h + 'px';
                    if (typeof($('#container').attr('style')) != 'undefined') {
                        $('#container').css('background-size', wh);
                    }
                });
            },
            read: function() {
                autoSkin();
            }
        };
    };
    return {

        // 如果存在获取此单例实例，如果不存在创建一个单例实例
        getInstance: function() {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };
})();

var body = (function() {
    var instance;

    function init() {
        return {
            expand: function() {
                //给内容扩展按钮绑定事件
                $('.rect').on('click', function() {
                    $('.content-main').css('height', 'auto');
                    $('.rect').fadeOut('slow');
                });
            },
            focus: function() {
                //给我的关注菜单绑定事件
                $('.my-menu').on('click', function(e) {
                    var myMenu = $('.my-menu');
                    var myMain = $('.my-main');
                    myMenu.find('span').removeAttr('style');
                    myMenu.find('div').removeAttr('style');
                    myMenu.removeAttr('style');
                    if ($(this).find('span').length != 0) {
                        $(this).find('span').css('background-position', '-144px 0');
                        $(this).find('div').css('color', '#fff');
                        $(this).css('background', '#9a9da2');
                    } else {
                        $(this).css({ 'background': '#9a9da2', 'color': '#fff' })
                    }
                    myMain.css('display', 'none');
                    switch ($(this).attr('class')) {
                        case 'my-menu my-focus':
                            $('#focus-main').css('display', 'block');
                            break;
                        case 'my-menu my-nav':
                            $('#nav-main').css('display', 'block');
                            break;
                        case 'my-menu my-video':
                            $('#video-main').css('display', 'block');
                            break;
                        case 'my-menu my-rec':
                            $('#rec-main').css('display', 'block');
                            break;
                        case 'my-menu my-shop':
                            $('#shop-main').css('display', 'block');
                            break;
                        default:
                            $('#novel-main').css('display', 'block');
                            break;
                    }

                });
                //给我的关注按钮绑定事件
                $('.focus-title').on('click', function() {
                    $('.focus-arrow').toggleClass('transform');
                    $('.focus-second').slideToggle('1000');
                });
            }
        };
    };
    return {

        // 如果存在获取此单例实例，如果不存在创建一个单例实例
        getInstance: function() {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };
})();

var scroll = (function() {
    var instance;

    function init() {
        //一个定时器
        var timer = null;
        //滚动条是否到达顶部
        var isTop = true;
        //搜索框向上偏移量
        var topSearch = $('.search-box').offset().top;
        //检测鼠标是否滚动到主体内容框底部
        function checkScroll() {
            var rectH = 768;
            var scrollTop = $(window).scrollTop();
            var documentH = $(window).height();
            return (rectH < scrollTop + documentH) ? true : false;
        }
        return {
            goTop: function() {
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
            },
            start: function() {
                //鼠标滚动触发事件
                $(window).on('scroll', function() {
                    var scrollTop = $(window).scrollTop();
                    if (checkScroll()) {
                        $('.content-main').css('height', 'auto');
                        $('.rect').fadeOut('slow');
                    }
                    if (!isTop) {
                        clearInterval(timer);
                    }
                    isTop = false;
                    $('.back-top').css('display', 'block');
                    if ($(window).scrollTop() == 0) {
                        $('.back-top').hide();
                    }
                    if (scrollTop > topSearch - 60 && $('#container .content').height() > 407) {
                        $('.form-box').css({
                            'width': '100%',
                            'min-width': '897px',
                            'position': 'fixed',
                            'margin-left': 'calc(100% - 100vw)',
                            'top': '0px',
                            'z-index': 3,
                            'padding-bottom': '10px',
                            'background': 'rgba(255,255,255,.9)',
                            'box-shadow': '0 0 5px #888'
                        });
                        $('.sm-baidulogo').css({
                            'width': '101px',
                            'position': 'absolute',
                            'margin-top': '2px',
                            'margin-left': '-112px',
                            'z-index': 4
                        });
                        $('.form-box .camera').css({
                            'margin-left': '-28px',
                            'margin-top': '14px'
                        });
                    } else {
                        $('.form-box').removeAttr('style');
                        $('.sm-baidulogo').removeAttr('style');
                        $('.form-box .camera').removeAttr('style');
                    }
                });
            }
        };
    };
    return {

        // 如果存在获取此单例实例，如果不存在创建一个单例实例
        getInstance: function() {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };
})();
//一个头实例
var myHead = head.getInstance();
myHead.showMsg();
myHead.showSkinBox();
myHead.showMorePro();
myHead.hideBox();
//一个皮肤实例
var mySkin = skin.getInstance();
mySkin.change();
mySkin.close();
mySkin.resize();
mySkin.read();
//一个身体实例
var myBody = body.getInstance();
myBody.expand();
myBody.focus();
//一个滚动实例
var myScroll = scroll.getInstance();
myScroll.goTop();
myScroll.start();
