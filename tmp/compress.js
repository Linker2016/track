/**
 * Created by Administrator on 2017/1/4.
 */
var fs = require("fs");
var zlib = require("zlib");

//compress test.txt to test.txt.gz
//fs.createReadStream("test.txt")
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream("test.txt.gz"));
//
//console.log("compress file complete");

fs.createReadStream("test.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("test.txt"));

console.log("decompress file complete");
