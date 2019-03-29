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

gulp.task('lib_build', ['dist_clean'], function (done) {
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


gulp.task('theme', ['theme_clean','copy_theme'], function (done) {
  gulp.src(['./style/index.scss'])
      .pipe(sass())
      .pipe(concat('tinper-bee.css'))
      .pipe(postcss(postConfig))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});

gulp.task('copy_theme',function(){
  gulp.src('theme/tinper-bee-blue.css').pipe(gulp.dest('assets/theme'));
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

gulp.task('copy', ['copy_clean'], function (done) {
    gulp.src([
            './node_modules/bee-table/build/lib/*.js',
            './node_modules/bee-table/build/render/*.js',
        ]).pipe(gulp.dest('./lib'));
})

if(gulp.env._&&gulp.env._.length>0&&gulp.env._[0]=='online'){
    gulp.task('online', ['theme']);
}else{
    gulp.task('default', ['js_uglify', 'theme', 'lib_build', 'copy']);
}
