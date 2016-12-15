/**
 * Created by chief on 16/11/28.
 */

var koa = require('koa');
var render = require('koa-swig');
var path = require('path');
var logger = require('koa-logger');
var serve = require('koa-static');
var app = koa();

//加载路由
var router = require('./router.js').router;

//初始化路由
app.use(router.routes()).use(router.allowedMethods());

//打印log
app.use(logger());

//初始化静态服务器资源
app.use(serve(path.join(__dirname, '../static')));
app.use(serve(path.join(__dirname, '../node_modules')));

app.context.render = render({
    root: path.join(__dirname, '../views'),
    autoescape: true,
    cache: false, // disable,memory, set to false, memory
    ext: 'swig'
});

app.use(function *(next) {

    if (this.body || !this.idempotent) return;

    yield this.render('index');
});



app.listen(8090);


console.log('listening on port 8090');
