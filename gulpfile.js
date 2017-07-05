var gulp = require('gulp'),
gulp_watch=require('gulp-watch');


gulp.task('default', function(){
	console.log("Default task running.");
});
gulp.task('html', function(){
	console.log("HTML task running.");
});
gulp.task('styles', function(){
	console.log("This is css.");
});


gulp.task('watch', function(){
	gulp_watch('./app/index.html', function(){
		gulp.start('html');
	});

	gulp_watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});

