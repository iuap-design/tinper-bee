var fs = require('fs')
var path = require('path');
var filePath = path.resolve(__dirname+'/theme/'); 
var patt = /\/\/design.yonyoucloud.com\/static\/iconfont/g;
// var es6Str = /var supported = candidates.find([\\s\\S]*?);/g;
// var es5Str = "var supported = '';\n  for(var k = 0; k++; k < candidates.length) {\n    if(candidates[k] === 'on' + eventName in document){ \n      supported = candidates[k];\n } \n }"

/**
 * 替换 tinper-bee.css 中的 CDN 路径
 */
fs.readFile('./assets/tinper-bee.css',function(err,data){
    var result1 = data.toString().replace(patt, './fonts');
    if(err) {
        return console.error('❌读取文件时发生错误！');
    }
    fs.writeFile('./assets/tinper-bee.css', result1, 'utf8', function (err) {
        if (err) return console.error('❌写入文件时发生错误');
        console.log('😀写入文件成功');
    });
});

/**
 * 读取 theme 目录
 */
fs.readdir(filePath, 'utf8', function (err,data) {
    if(err) {
        return console.error('❌读取目录时发生错误！');
    }
    console.log('😀读取 theme 目录成功');
    getThemeCss(data);
});

/**
 * 替换 tinper-bee-theme.css 中的 CDN 路径
 */
function getThemeCss(data){
    data.forEach(function(item, index) {
        fs.readFile('./theme/'+item,'utf8',function(err,files){
            var result2 = files.replace(patt, '../fonts');
            if(err) return console.error('❌读取文件时发生错误！');
            fs.writeFile('./theme/'+item, result2, 'utf8', function (err) {
                if (err) return console.error('❌写入文件时发生错误');
                console.log('😀写入 theme 文件成功');
            });
        })
    });
};

/**
 * 替换 tinper-bee.js 中的 ES6 语法
 */
// fs.readFile('./build/tinper-bee.js',function(err,data){
//     // var result2 = es6Str.test(data.toString()）
//     var result2 = data.toString().replace(es6Str, es5Str);
//     if(err) {
//         return console.error('❌读取 tinper-bee.js 时发生错误！');
//     }
//     fs.writeFile('./build/tinper-bee-test.js', result2, 'utf8', function (err) {
//         if (err) return console.error('❌写入 tinper-bee.js 时发生错误');
//         console.log('😀写入 tinper-bee.js 文件成功');
//     });
// });