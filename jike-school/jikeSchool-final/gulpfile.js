var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var seajscom = require('gulp-seajs-combine');
var uglify = require('gulp-uglify');

gulp.task('sass',function(){
	gulp.src('./sass/jkxy.scss')
	.pipe(sass())
	.on('error', function (err) {
            console.error('Error!', err.message);
        })
	.pipe(minifycss())
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('seajs',function(){
	gulp.src('./js/main.js')
	.pipe(seajscom(null, {
		except: ['jquery.min']
	}))
	.pipe(uglify({
		mangle: {except: ['require','exports','module','$']},
		compress: true
	}))
	.pipe(gulp.dest('./dist/js'));
});
gulp.task('default',['sass','seajs']);