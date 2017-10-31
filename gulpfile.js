var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefix = require('autoprefixer');
var rimraf = require('rimraf');
var webpack = require('webpack');
var webpackCfg = require('./webpack.conf.js');
var webpackProdCfg = require('./webpack.pord');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');



gulp.task('js_build', ['js_clean'], function (done) {
  webpack(webpackCfg, function (err, stats) {
    if (err) {
      console.log(err);
    } else {
      console.log('webpack log:' + stats.toString({
        hash: false,
        chunks: false,
        children: false,
      }));
      done();
    }
  });
});


gulp.task('js_uglify', ['js_build'], function (done) {
    webpack(webpackProdCfg, function (err, stats) {
        if (err) {
            console.log(err);
        } else {
            console.log('webpack log:' + stats.toString({
                hash: false,
                chunks: false,
                children: false,
            }));
            done();
        }
    });
});

var postConfig = [
    autoprefix({
        browsers: ['last 2 versions', 'not ie < 8'],
        cascade: false,
    }),
    //cssnano,
]

gulp.task('theme', ['theme_clean'], function (done) {
  gulp.src(['./style/index.scss'])
      .pipe(sass())
      .pipe(concat('tinper-bee.css'))
      .pipe(postcss(postConfig))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});



gulp.task('js_clean', function (done) {
  rimraf('./build', {}, function () {
    done();
  });
});

gulp.task('theme_clean', function (done) {
  rimraf('./assets', {}, function () {
    done();
  });
});


gulp.task('default', ['js_uglify', 'theme']);
