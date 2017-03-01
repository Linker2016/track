var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});

    fs.readFile('test.txt', function (err, data) {
        if (err) return console.error(err);

        response.end("Hello World\n"+data.toString());
    });
}).listen(3000);
console.log('Server running at http://127.0.0.1:8888/');

exports.world = function(){
    console.log("Hello World!");
}

function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
      console.log("Hello " + name);
    };
};

module.exports = Hello;

/**
 * POST请求
 */
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(8888);
