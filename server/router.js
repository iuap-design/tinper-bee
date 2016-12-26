/**
 * Created by chief on 16/11/28.
 */

var router = require('koa-router')();
var fs = require('fs');
var path = require('path');
var cate = require("../static/json/catalog-0.1.json");
var markdown = require( "markdown" ).markdown;
var marked = require('marked');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});




//首页路由
//router.get('/docs/bee/:id', function*(next) {
//    var docId = this.params.id;
//    try {
//        var data = fs.readFileSync(path.join(__dirname,'../docs/'+id+'.md'),'utf-8');
//    }catch (e) {
//        data = e;
//        return ;
//    }
//    data = marked(data);
//    yield this.render('docs',{
//        sidebar:cate,
//        doc:data
//    });
//});

//首页路由
router.get('/', function*(next) {
    var data = fs.readFileSync(path.join(__dirname,'../docs/summarize.md'),'utf-8');
    data = marked(data);
    var docId = "summarize";
    yield this.render('docs',{
        sidebar:cate,
        data:data,
        doc:data,
        docId:docId
    });
});

//router.get('/docs', function*(next) {
//    var data = fs.readFileSync(path.join(__dirname,'../docs/quickStart.md'),'utf-8');
//    data = marked(data);
//    yield this.render('docs',{
//        sidebar:cate,
//        doc:data
//    });
//});

//读取md文档，生成html
router.get('/:id', function*(next) {
    var docId = this.params.id;
    var isComponent = 1;

    if(docId.search('bee-')==-1){
        try{
            var data = fs.readFileSync(path.join(__dirname,'../docs/'+docId+'.md'),'utf-8');
        }
        catch (e){
            data = '## 文档建设中...';
        }
        isComponent = 0;
    }
    else {
        try{
            var data = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/docs/api.md'),'utf-8');
        }
        catch (e){
            data = '## 文档建设中...';
        }

        var demo = '<div id="tinperBeeDemo"></div>';
        data = data.replace(/##.*代码演示/,'## 代码演示\n'+demo);
    }


    data = marked(data);


    data = data.replace(/\<table/ig,'\<div class="table-container">\n\<table').replace(/<\/table>/ig,'<\/table>\n<\/div>\n');



    //var p = path.join(__dirname,'../node_modules/'+docId+'/demo/demoButton');
    //
    //function explorer(paths){
    //    var arr = [],code=[];
    //    fs.readdir(paths, function(err,files){
    //
    //        if(err){
    //            console.log("error:\n"+err);
    //            return;
    //        }
    //
    //        files.forEach(function(file) {
    //            var fileName = file.replace('.js','');
    //            fs.stat(paths + "//" + file, function (err, stat) {
    //                console.log(stat);
    //                if (err) {
    //                    console.log(err);
    //                    return;
    //                }
    //                if (stat.isDirectory()) {
    //                    console.log(paths + "\/" + file + "\/");
    //                    explorer(path + "\/" + file);
    //                } else {
    //                    console.log(paths + "\/" + file);
    //                }
    //
    //            });
    //            var data = fs.readFileSync(paths + "//" + file,'utf-8');
    //
    //
    //
    //            arr.push({
    //                example: '<'+fileName+' />',
    //                title: fileName,
    //                code: data
    //            });
    //            code.push(data);
    //        });
    //        var index = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/demo/index.bak.js'),'utf-8');
    //
    //        var str = 'var DemoArray = '+JSON.stringify(arr) +'\n';
    //
    //        str = str.replace(/ple":"</ig,'ple":<').replace(/","tit/ig,',"tit');
    //
    //        console.log(str);
    //
    //        fs.writeFile(path.join(__dirname,'../node_modules/'+docId+'/demo/index.js'), str+index+code.join(''), function (err) {
    //            if (err) throw err;
    //            console.log('It\'s saved!');
    //        });
    //
    //    });
    //};
    //
    //explorer(p);


    //var demoJs = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/demo/demoButton/demo-1.js'),'utf-8');



    //var ReactApp = React.createFactory(require('./../node_modules/'+docId+'/demo/demoButton/demo-1.js').ReactApp);

    //console.log(ReactApp);


    yield this.render('docs',{
        sidebar:cate,
        docId:docId,
        doc:data,
        isComponent:isComponent
    });
});



exports.router = router;
