//新闻样式
var newsType = 'recommend';
//保存token
var token;
//默认加载推荐新闻表
$('.page-header').find('h4').html('推荐新闻');
ajax();
//生成token并获取
getToken();
//左侧按钮绑定事件添加高亮提示
$('#nav > li').click(function(e) {
    e.preventDefault();
    $('#nav > li').removeClass('active');
    $(this).addClass('active');
});
//点击不同新闻类型，加载不同新闻表
$('.recommend').on('click', function() {
    newsType = 'recommend';
    $('.page-header').find('h4').html('推荐新闻');
    $('.news-thead').empty();
    $('.news-tbody').empty();
    $('.insert-box').empty();
    ajax();
});
$('.hundred').on('click', function() {
    newsType = 'hundred';
    $('.page-header').find('h4').html('百家新闻');
    $('.news-thead').empty();
    $('.news-tbody').empty();
    $('.insert-box').empty();
    ajax();
});
$('.local').on('click', function() {
    newsType = 'local';
    $('.page-header').find('h4').html('本地新闻');
    $('.news-thead').empty();
    $('.news-tbody').empty();
    $('.insert-box').empty();
    ajax();
});
$('.image').on('click', function() {
    newsType = 'image';
    $('.page-header').find('h4').html('图片新闻');
    $('.news-thead').empty();
    $('.news-tbody').empty();
    $('.insert-box').empty();
    ajax();
});
//为非图片新闻模态框确认按钮绑定事件，修改或插入数据
$('#modal-confirm').on('click', function() {
    if ($(this).html() == '确认修改') {
        var id = $(this).attr('data-id');
        var title = $('#inputTitle').val();
        var des = $('#inputDes').val();
        var url = $('#inputUrl').val();
        var img1 = $('#inputImg1').val();
        var img2 = $('#inputImg2').val();
        var img3 = $('#inputImg3').val();
        var time = $('#inputTime').val();
        var type = $('#inputType').val();
        if (title == '' && des == '' && url == '' && img1 == '' && img2 == '' && img3 == '' && type == '') {
            alert('输入不能为空!');
        } else {
            $.ajax({
                type: 'POST',
                url: './adminfix.php',
                data: {
                    newsType: newsType,
                    id: id,
                    title: title,
                    description: des,
                    url: url,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    time: time,
                    type: type,
                    token: token
                },
                dataType: 'text',
                success: function(data) {
                    if (data != '错误') {
                        $('.news-thead').empty();
                        $('.news-tbody').empty();
                        $('.insert-box').empty();
                        ajax();
                        alert('修改成功');      
                    }else{
                        alert('您无操作权限');
                    }
                }
            });
            $('#myModal-1').modal('hide');
        }
    }
    if ($(this).html() == '确认插入') {
        var title = $('#inputTitle').val();
        var des = $('#inputDes').val();
        var url = $('#inputUrl').val();
        var img1 = $('#inputImg1').val();
        var img2 = $('#inputImg2').val();
        var img3 = $('#inputImg3').val();
        var time = $('#inputTime').val();
        var type = $('#inputType').val();
        if (title == '' && des == '' && url == '' && img1 == '' && img2 == '' && img3 == '' && type == '') {
            alert('插入不能为空!');
        } else {
            $.ajax({
                type: 'POST',
                url: './admininsert.php',
                data: {
                    newsType: newsType,
                    title: title,
                    description: des,
                    url: url,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    time: time,
                    type: type,
                    token: token
                },
                dataType: 'text',
                success: function(data) {
                    if (data != '错误') {
                        $('.news-thead').empty();
                        $('.news-tbody').empty();
                        $('.insert-box').empty();
                        ajax();
                        alert('插入成功');   
                    }else{
                        alert('您无操作权限');
                    }
                }
            });
            $('#myModal-1').modal('hide');
        }
    }
});
//为图片新闻模态框确认按钮绑定事件，修改或插入数据
$('#modal-confirm2').on('click', function() {
    if ($(this).html() == '确认修改') {
        var id = $(this).attr('data-id');
        var title = $('#inputTitle2').val();
        var url = $('#inputUrl2').val();
        var img = $('#inputImg').val();
        var praise = $('#inputPraise').val();
        if (title == '' && url == '' && img == '' && praise == '') {
            alert('输入不能为空!');
        } else {
            $.ajax({
                type: 'POST',
                url: './adminfix.php',
                data: {
                    newsType: newsType,
                    id: id,
                    title: title,
                    url: url,
                    img: img,
                    praise: praise,
                    token: token
                },
                dataType: 'text',
                success: function(data) {
                    if (data != '错误') {
                        $('.news-thead').empty();
                        $('.news-tbody').empty();
                        $('.insert-box').empty();
                        ajax();
                        alert('修改成功');     
                    }else{
                        alert('您无操作权限');
                    }
                }
            });
            $('#myModal-2').modal('hide');
        }
    }
    if ($(this).html() == '确认插入') {
        var title = $('#inputTitle2').val();
        var url = $('#inputUrl2').val();
        var img = $('#inputImg').val();
        var praise = $('#inputPraise').val();
        if (title == '' && url == '' && img == '' && praise == '') {
            alert('插入不能为空!');
        } else {
            $.ajax({
                type: 'POST',
                url: './admininsert.php',
                data: {
                    newsType: newsType,
                    title: title,
                    url: url,
                    img: img,
                    praise: praise,
                    token: token
                },
                dataType: 'text',
                success: function(data) {
                    if (data != '错误') {
                        $('.news-thead').empty();
                        $('.news-tbody').empty();
                        $('.insert-box').empty();
                        ajax();
                        alert('插入成功');      
                    }else{
                        alert('您无操作权限');
                    }
                }
            });
            $('#myModal-2').modal('hide');
        }
    }
});
//删除按钮绑定事件，确认删除新闻
$('#btn-close').on('click', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'POST',
        url: './admindelet.php',
        data: {
            newsType: newsType,
            id: id,
            token: token
        },
        dataType: 'text',
        success: function(data) {
            if (data != '错误') {
                $('.news-thead').empty();
                $('.news-tbody').empty();
                $('.insert-box').empty();
                ajax();
                alert('删除成功');   
            }else{
                alert('您无操作权限');
            }
        }
    });
    $('#myModal-3').modal('hide');
});
//生成token并获取函数
function getToken(){
    $.ajax({
        type: 'GET',
        url: './token.php',
        dataType: 'text',
        success: function(data) {
            token = data;
        }
    });
}
function htmlspecialchars_decode(str){           
    str = str.replace(/&amp;/g, '&'); 
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&quot;/g, "''");  
    str = str.replace(/&#039;/g, "'");  
    return str;  
}
//ajax请求获取新闻表函数
function ajax() {
    $.ajax({
        type: 'GET',
        url: './admin.php',
        data: {
            type: newsType
        },
        dataType: 'json',
        success: function(data) {
            if (newsType != 'image') {
                $('<tr>').appendTo('.news-thead');
                $('<td>').html('id').appendTo($('.news-thead>tr'));
                $('<td>').html('标题').appendTo($('.news-thead>tr'));
                $('<td>').html('描述').appendTo($('.news-thead>tr'));
                $('<td>').html('地址').appendTo($('.news-thead>tr'));
                $('<td>').html('图片1').appendTo($('.news-thead>tr'));
                $('<td>').html('图片2').appendTo($('.news-thead>tr'));
                $('<td>').html('图片3').appendTo($('.news-thead>tr'));
                $('<td>').html('时间').appendTo($('.news-thead>tr'));
                $('<td>').html('类型').appendTo($('.news-thead>tr'));
                $('<td>').html('操作').appendTo($('.news-thead>tr'));
                $.each(data, function(index, value) {
                    $('<tr>').attr('data-id', value.id).appendTo('.news-tbody');
                    $('<td>').addClass('data-id').html(value.id).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-title').html(value.title).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-des').html(value.description).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-url').html(value.url).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-img1').html(value.img1).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-img2').html(value.img2).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-img3').html(value.img3).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-time').html(value.time).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-type').html(value.type).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-op').appendTo($('.news-tbody>tr:last'));
                    $('<span>').attr({
                        'data-id': value.id,
                        'data-toggle': 'modal',
                        'data-target': '#myModal-1'
                    }).addClass('data-fix').css('cursor', 'pointer').html('修改 ').on('click', function() {
                        $('#modal-confirm').attr('data-id', value.id).html('确认修改');
                        $('#inputTitle').val(htmlspecialchars_decode(value.title));
                        $('#inputDes').val(htmlspecialchars_decode(value.description));
                        $('#inputUrl').val(htmlspecialchars_decode(value.url));
                        $('#inputImg1').val(htmlspecialchars_decode(value.img1));
                        $('#inputImg2').val(htmlspecialchars_decode(value.img2));
                        $('#inputImg3').val(htmlspecialchars_decode(value.img3));
                        $('#inputTime').val(value.time);
                        $('#inputType').val(htmlspecialchars_decode(value.type));
                    }).appendTo('.data-op:last');
                    $('<span>').attr({
                        'data-id': value.id,
                        'data-toggle': 'modal',
                        'data-target': '#myModal-3'
                    }).addClass('data-delet').css('cursor', 'pointer').html('删除 ').on('click', function() {
                        $('#btn-close').attr('data-id', value.id).html('确认删除');
                    }).appendTo('.data-op:last');
                });
                $('<span>').attr({
                    'data-toggle': 'modal',
                    'data-target': '#myModal-1'
                }).addClass('btn btn-primary data-insert').css('cursor', 'pointer').html('插入 ').on('click', function() {
                    $('#modal-confirm').html('确认插入');
                    $('#inputTitle').val('');
                    $('#inputDes').val('');
                    $('#inputUrl').val('');
                    $('#inputImg1').val('');
                    $('#inputImg2').val('');
                    $('#inputImg3').val('');
                    $('#inputTime').val('');
                    $('#inputType').val('');
                }).appendTo('.insert-box');
            } else {
                $('<td>').html('id').appendTo($('.news-thead'));
                $('<td>').html('标题').appendTo($('.news-thead'));
                $('<td>').html('地址').appendTo($('.news-thead'));
                $('<td>').html('图片').appendTo($('.news-thead'));
                $('<td>').html('赞数').appendTo($('.news-thead'));
                $('<td>').html('操作').appendTo($('.news-thead'));
                $.each(data, function(index, value) {
                    $('<tr>').attr('data-id', value.id).appendTo('.news-tbody');
                    $('<td>').addClass('data-id').html(value.id).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-title').html(value.title).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-url').html(value.url).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-img').html(value.img).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-praise').html(value.praise).appendTo($('.news-tbody>tr:last'));
                    $('<td>').addClass('data-op').appendTo($('.news-tbody>tr:last'));
                    $('<span>').attr({
                        'data-id': value.id,
                        'data-toggle': 'modal',
                        'data-target': '#myModal-2'
                    }).addClass('data-fix').css('cursor', 'pointer').html('修改 ').on('click', function() {
                        $('#modal-confirm2').attr('data-id', value.id).html('确认修改');
                        $('#inputTitle2').val(htmlspecialchars_decode(value.title));
                        $('#inputUrl2').val(htmlspecialchars_decode(value.url));
                        $('#inputImg').val(htmlspecialchars_decode(value.img));
                        $('#inputPraise').val(htmlspecialchars_decode(value.praise));
                    }).appendTo('.data-op:last');
                    $('<span>').attr({
                        'data-id': value.id,
                        'data-toggle': 'modal',
                        'data-target': '#myModal-3'
                    }).addClass('data-delet').css('cursor', 'pointer').html('删除 ').on('click', function() {
                        $('#btn-close').attr('data-id', value.id).html('确认删除');
                    }).appendTo('.data-op:last');
                });
                $('<span>').attr({
                    'data-toggle': 'modal',
                    'data-target': '#myModal-2'
                }).addClass('btn btn-primary data-insert').css('cursor', 'pointer').html('插入 ').on('click', function() {
                    $('#modal-confirm2').html('确认插入');
                    $('#inputTitle2').val('');
                    $('#inputUrl2').val('');
                    $('#inputImg').val('');
                    $('#inputPraise').val('');
                }).appendTo('.insert-box');
            }
        }
    });
}
