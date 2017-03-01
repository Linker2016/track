/**
 * Created by Administrator on 2017/1/10.
 */
var express = require('express');
var app = express();
var fs = require("fs");
var multer  = require('multer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var LOGIN = require('./controller/loginController');
var REGISTER = require('./controller/registerController');

app.set("view", __dirname, "/")

// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('content'));
app.use(multer({ dest: './tmp/'}).array('image'));
app.use(cookieParser());

//用户登录
app.post('/userLogin', function(req, res){
    LOGIN.LOGIN_CONTROLLER(req, res);
});

//用户注册
app.post('/register', function(req, res){
    REGISTER.REGISTER_CONTROLLER(req, res);
});

//用户名检查
app.post('/userNameCheck', function(req, res){
    REGISTER.USER_CHECK_CONTROLLER(req, res);
});

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    console.log("Cookies: ", req.cookies);
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/content/login/','login.html'));
})

//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

//处理GET 方法的表单提交
app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

//处理文件上传
app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/tmp/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(80, '0.0.0.0',function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})