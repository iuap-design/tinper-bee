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

    var data = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/README.md'),'utf-8');
    //data = markdown.toHTML(data);
    data = marked(data);

    //var demo = require('./node_modules/'+docId+'/dist/demo.js');

    try{
        var demo = fs.readFileSync(path.join(__dirname,'../node_modules/'+docId+'/demo/index.html'),'utf-8');
    }
    catch(err) {
        var demo = err;
    }
    yield this.render('docs',{
        sidebar:package.dependencies,
        docId:docId,
        doc:data,
        demo:demo
    });
});


exports.router = router;
