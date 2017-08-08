//新闻样式
var newsType = 'recommend';
//默认加载推荐新闻表
$('.page-header').find('h4').html('推荐新闻');
ajax();
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
    $('.table-container').empty();
    ajax();
});
$('.hundred').on('click', function() {
    newsType = 'hundred';
    $('.page-header').find('h4').html('百家新闻');
    $('.table-container').empty();
    ajax();
});
$('.local').on('click', function() {
    newsType = 'local';
    $('.page-header').find('h4').html('本地新闻');
    $('.table-container').empty();
    ajax();
});
$('.image').on('click', function() {
    newsType = 'image';
    $('.page-header').find('h4').html('图片新闻');
    $('.table-container').empty();
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
                url: './users/adminfix',
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
                    type: type
                },
                dataType: 'text',
                success: function(data) {
                    $('.table-container').empty();
                    ajax();
                    alert('修改成功');
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
                url: './users/admininsert',
                data: {
                    newsType: newsType,
                    title: title,
                    description: des,
                    url: url,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    time: time,
                    type: type
                },
                dataType: 'text',
                success: function(data) {
                    $('.table-container').empty();
                    ajax();
                    alert('插入成功');
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
                url: './users/adminfix',
                data: {
                    newsType: newsType,
                    id: id,
                    title: title,
                    url: url,
                    img: img,
                    praise: praise
                },
                dataType: 'text',
                success: function(data) {
                    $('.table-container').empty();
                    ajax();
                    alert('修改成功');
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
                url: './users/admininsert',
                data: {
                    newsType: newsType,
                    title: title,
                    url: url,
                    img: img,
                    praise: praise
                },
                dataType: 'text',
                success: function(data) {
                    $('.table-container').empty();
                    ajax();
                    alert('插入成功');
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
        url: './users/admindelet',
        data: {
            newsType: newsType,
            id: id
        },
        dataType: 'text',
        success: function(data) {
            $('.table-container').empty();
            ajax();
            alert('删除成功');
        }
    });
    $('#myModal-3').modal('hide');
});
//ajax请求获取新闻表函数
function ajax() {
    $.ajax({
        type: 'GET',
        url: './users/admin',
        data: {
            type: newsType
        },
        dataType: 'html',
        success: function(data) {
            var html = $('.table-container').html() + data;
            $('.table-container').html(html);
        }
    });
}
