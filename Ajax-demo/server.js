var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];

if (!port) {
  console.log('请指定监听的端口号');
  process.exit(1);
}

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = '';
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /********  ************/

  console.log('监测到请求，路径（带查询参数）为：' + pathWithQuery);

  if (path === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    let htmlStr = fs.readFileSync('public/index.html').toString();
    response.write(htmlStr);
    response.end();
  } else if (path === '/main.js') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
    let jsStr = fs.readFileSync('public/main.js').toString();
    response.write(jsStr);
    response.end();
  } else if (path === '/block.html') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    let htmlStr = fs.readFileSync('public/ajaxdata/block.html').toString();
    response.write(htmlStr);
    response.end();
  } else if (path === '/block.css') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css;charset=utf-8');
    let cssStr = fs.readFileSync('public/ajaxdata/block.css').toString();
    response.write(cssStr);
    response.end();
  } else if (path === '/block.js') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
    let jsStr = fs.readFileSync('public/ajaxdata/block.js').toString();
    response.write(jsStr);
    response.end();
  } else if (path === '/book1.json') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json;charset=utf-8');
    let jsonStr = fs.readFileSync('public/database/book1.json').toString();
    response.write(jsonStr);
    response.end();
  } else if (path === '/book2.json') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json;charset=utf-8');
    let jsonStr = fs.readFileSync('public/database/book2.json').toString();
    response.write(jsonStr);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(`你输入的路径不存在对应的内容`);
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  '监听 ' +
    port +
    ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' +
    port
);
