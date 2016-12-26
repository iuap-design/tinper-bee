/**
 * Created by chief on 16/11/28.
 */

var koa = require('koa');
var render = require('koa-swig');
var path = require('path');
var logger = require('koa-logger');
var serve = require('koa-static');
var staticCache = require('koa-static-cache');
var app = koa();

//加载路由
var router = require('./router.js').router;

//初始化路由
app.use(router.routes()).use(router.allowedMethods());

//打印log
app.use(logger());

//初始化静态服务器资源

app.use(staticCache(path.join(__dirname, '../static')),{  maxAge: 365 * 24 * 60 * 60});
app.use(staticCache(path.join(__dirname, '../assets')),{  maxAge: 365 * 24 * 60 * 60});
app.use(staticCache(path.join(__dirname, '../node_modules')),{  maxAge: 365 * 24 * 60 * 60});


app.context.render = render({
    root: path.join(__dirname, '../views'),
    autoescape: true,
    cache: false, // disable,memory, set to false, memory
    ext: 'swig'
});

app.use(function *(next) {

    if (this.body || !this.idempotent) return;

    this.redirect('/');
});



app.listen(9090);


console.log('listening on port 9090');
