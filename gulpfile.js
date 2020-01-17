var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefix = require('autoprefixer');
var rimraf = require('rimraf');
var webpack = require('webpack');
var webpackCfg = require('./webpack.conf.js');
var webpackProdCfg = require('./webpack.pord');
var webpackLibCfg = require('./webpack.modules');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
const replace = require('gulp-replace');
var pkg = require('./package.json');
var spawn = require('child_process').spawn;


var postConfig = [
    autoprefix({
        browsers: ['last 2 versions', 'not ie < 8'],
        cascade: false,
    }),
    cssnano({
        reduceIdents: false, //不压缩keyframe名称
        safe: true
    }),
]

gulp.task('lib_build', function (done) {
    webpack(webpackLibCfg, function (err, stats) {
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
    })
});

gulp.task('dist_clean', function (done) {
    rimraf('./dist', {}, function () {
        done();
    });
})


gulp.task('js_build', function (done) {
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


gulp.task('js_uglify', function (done) {
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

gulp.task('theme', function (done) {
  gulp.src(['./style/index.scss'])
      .pipe(sass())
      .pipe(concat('tinper-bee.css'))
      .pipe(postcss(postConfig))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});

gulp.task('themePrefix', function (done) {
  gulp.src(['./style/tinper-bee.scss'])
      .pipe(sass())
      .pipe(concat('tinper-bee.css'))
      .pipe(postcss(postConfig))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});

gulp.task('copy_theme',function(done){
  gulp.src('theme/*.css')
      .pipe(gulp.dest('assets/theme'))
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

gulp.task('copy_fonts',function(done){
    gulp.src([
        './style/utils/iconfont.eot',
        './style/utils/iconfont.svg',
        './style/utils/iconfont.ttf',
        './style/utils/iconfont.woff'
    ]).pipe(gulp.dest('assets/fonts'))
      .on('end', function () {
        done();
      });
});

gulp.task('copy_reset',function(done){
    gulp.src([
        './style/reset.css',
    ]).pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});


gulp.task('update', function (done) {
    var depAry = [];
    for(var key in pkg.devDependencies){
        if(/bee-/.test(key)){
           depAry.push(key + '@' + pkg.devDependencies[key]);
        }
    }

    depAry.push('--production');

    depAry.forEach(function (item) {
        var runner = spawn('npm', ['update', '-d', item], {stdio: 'inherit'});
        runner.on('close', function (code) {
            console.log(code);
            done();
            console.log('done');
        })
    })

})

gulp.task('copy_clean', function (done) {
    rimraf('./lib/*.js', {}, function () {
      done();
    });
  });

gulp.task('copy', function (done) {
    gulp.src([
            './node_modules/bee-table/build/lib/*.js',
            './node_modules/bee-table/build/render/*.js',
        ]).pipe(gulp.dest('./lib'))
          .on('end', function () {
            done();
          });
})

gulp.task('replacePath', function(done){
  gulp.src(['./assets/tinper-bee.css'])
      .pipe(replace(/\/\/design.yonyoucloud.com\/static\/iconfont/g, './fonts'))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
  gulp.src(['./assets/theme/*.css'])
      .pipe(replace(/\/\/design.yonyoucloud.com\/static\/iconfont/g, '../fonts'))
      .pipe(gulp.dest('./assets/theme'))
      .on('end', function () {
        done();
      });
  gulp.src(['./build/index.css'])
      .pipe(replace(/\/\/design.yonyoucloud.com\/static\/iconfont/g, '../assets/fonts'))
      .pipe(gulp.dest('./build'))
      .on('end', function () {
        done();
      });
})

gulp.task('online', gulp.series('theme',function(done){ done() }));

gulp.task('onlinePrefix', gulp.series('themePrefix',function(done){ done() }));

gulp.task('default', gulp.series(
  gulp.parallel('js_clean','theme_clean','dist_clean','copy_clean'),
  gulp.parallel('copy','copy_theme','copy_fonts','copy_reset'),
  'js_build',
  'js_uglify',
  gulp.parallel('theme','lib_build'),
  'replacePath',
  function(done){
    done()
  }
));
