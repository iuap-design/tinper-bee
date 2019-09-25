var fs = require('fs')
var path = require('path');
var filePath = path.resolve(__dirname+'/theme/'); 
var patt = /\/\/design.yonyoucloud.com\/static\/iconfont/g;

/**
 * 替换 tinper-bee.css 中的 CDN 路径
 */
var tinperBeeCss = fs.readFile('./assets/tinper-bee.css',function(err,data){
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
var getThemeDir = fs.readdir(filePath, 'utf8', function (err,data) {
    if(err) {
        return console.error('❌读取目录时发生错误！');
    }
    console.log('😀读取目录成功');
    getThemeCss(data);
});

/**
 * 替换 tinper-bee-theme.css 中的 CDN 路径
 */
var getThemeCss = function(data){
    data.forEach(function(item, index) {
        fs.readFile('./theme/'+item,'utf8',function(err,files){
            var result2 = files.replace(patt, '../fonts');
            if(err) return console.error('❌读取文件时发生错误！');
            fs.writeFile('./theme/'+item, result2, 'utf8', function (err) {
                if (err) return console.error('❌写入文件时发生错误');
                console.log('😀写入文件成功');
            });
        })
    });
};