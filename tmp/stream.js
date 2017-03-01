/**
 * Created by Administrator on 2017/1/4.
 */

/**
 * 从流中读取数据
 */
//var fs = require("fs");
//var data = '';
//
////creat readable stream
//var readerStream = fs.createReadStream("test.txt");
//
////set unicode to utf8
//readerStream.setEncoding("UTF8");
//
////handler stream event -->data, end, and error
//readerStream.on("data", function(chunk){
//   data += chunk;
//});
//
//readerStream.on("end", function(){
//   console.log(data);
//});
//
//readerStream.on("error", function(err){
//   console.log(err.stack);
//});
//
//console.log("program compelet");

/**
 * 写入流
 */
var fs = require("fs");
var data = "﻿刘看山 知乎指南 建议反馈 移动应用 加入知乎 知乎协议 联系我们 © 2016 知乎";

//creat a wirteable stream output.txt
var writerStream = fs.createWriteStream("test.txt");

//set unicode to UTF8
writerStream.write(data,"UTF8");

//mark the end of file
writerStream.end();

//handler stream event --> data, end, and error
writerStream.on("finish", function(){
   console.log("wirte compelet");
});

writerStream.on("error", function(err){
   console.log(err.stack);
});

console.log("program complete");

/**
 * 管道流
 */
//var fs = require("fs");
//
//var readerStream  = fs.createReadStream("test.txt");
//
//var writerStream = fs.createWriteStream("output.txt");
//
//readerStream.pipe(writerStream);
//
//console.log("program complete");

/**
 * 链式流
 */
