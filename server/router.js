/**
 * Created by chief on 16/11/28.
 */

var router = require('koa-router')();
var fs = require('fs');
var path = require('path');
var package = require("../package.json");
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
router.get('/', function*(next) {
    yield this.render('index',{
        sidebar:package.dependencies
    });
});

//读取md文档，生成html
router.get('/docs/:id', function*(next) {
    var docId = this.params.id;



    var data = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/docs/api.md'),'utf-8');
    //var data = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/README.md'),'utf-8');
    //data = markdown.toHTML(data);

    var demo = '<div id="tinperBeeDemo"></div>';
    data = data.replace(/##.*代码演示/,'## 代码演示\n'+demo);

    data = marked(data);



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





    try{
        //var demo = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/demo/index.html'),'utf-8');
    }
    catch(err) {
        //var demo = err;
    }
    yield this.render('docs',{
        sidebar:package.dependencies,
        docId:docId,
        doc:data
    });
});



exports.router = router;
