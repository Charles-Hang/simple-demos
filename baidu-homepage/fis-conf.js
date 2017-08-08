//static 为最终发布文件

fis.match('::package', {
    // 启用 fis-spriter-csssprites 插件
    spriter: fis.plugin('csssprites'),
    // 启用 fis3-postpackager-loader 插件(未内置)合并js文件
    postpackager: fis.plugin('loader', {
        allInOne: {
            js: function(file) {
                return "/static/js/" + file.filename + "_aio.js";
            }
        }
    })
});

fis.match('*.html', {
    release: '/static/$0'
});
// 对 CSS 进行压缩、图片合并和配置
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true,
    // fis-optimizer-clean-css 插件进行压缩
    optimizer: fis.plugin('clean-css'),
    release: '/static/$0'
});

//对 js 进行压缩
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.{png,jpg,ico}', {
    release: '/static/img/$0'
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩
    optimizer: fis.plugin('png-compressor')
}); 

// 加 md5
fis.match('*.{js,css,png,jpg}', {
    useHash: true
});
