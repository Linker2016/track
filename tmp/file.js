/**
 * Created by Administrator on 2017/1/10.
 */

/**
 * 异步和同步
 * @type {exports}
 */
var fs = require("fs");

//异步读取
fs.readFile("test.txt",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

//同步读取
var data = fs.readFileSync("test.txt");
console.log("同步读取： " + data.toString());

console.log("程序执行完毕");

/**
 * 打开文件
 */
//异步打开文件
console.log("准备打开文件！");
fs.open("test.txt", "r+", function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功！");
});

/**
 * 获取文件信息
 */
fs.stat(__filename, function(err, stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isBlockDevice());
    console.log(stats.isCharacterDevice());
    console.log(stats.isSymbolicLink());
    console.log(stats.isFIFO());
    console.log(stats.isSocket());
});

/**
 * 写入文件
 */
console.log("准备写入文件");
fs.writeFile("test.txt", "我是通过写入的文件内容！", function(err){
   if(err){
       return console.error(err);
   }
    console.log("数据写入成功！");
    console.log("________我是分割线_________");
    console.log("读取写入的数据！");
    fs.readFile("test.txt", function(err, data){
       if(err){
           return console.error(err);
       }
        console.log("异步读取文件数据： " + data.toString());
    });
});

/**
 * 读取文件
 */
var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
fs.open("test.txt", "r+", function(err, fd){
   if(err){
       return console.error(err);
   }
    console.log("文件打开成功！");
    console.log("准备读取文件： ");
    fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
       if(err){
           return console.error(err);
       }
        console.log(bytes + " 字节被读取");

        //仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }
    });
});

/**
 * 关闭文件
 */
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('test.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        // 关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    });
});

/**
 * 截取文件
 */
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open("test.txt","r+",function(err,fd){
   if(err){
       return console.error(err);
   }
    console.log("文件打开成功！");
    console.log("截取10字节后的文件内容");

    //截取文件
    fs.ftruncate(fd, 10, function(err){
       if(err){
           console.error(err);
       }
        console.log("文件截取成功");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
           if(err){
               console.error(err);
           }

            //仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(1, bytes).toString());
            }

            //关闭文件
            fs.close(fd, function(err){
               if(err){
                   console.log(err);
               }
                console.log("文件关闭成功");
            });
        });
    });
});

/**
 * 删除文件
 */
console.log("准备删除文件！");
/*fs.unlink("test.txt", function(err){
   if(err){
       return console.error(err);
   }
    console.log("文件删除成功！");
});*/

/**
 * 创建目录
 */
console.log("创建目录 ./tmp/test/");
fs.mkdir("./tmp/test/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});

/**
 * 读取目录
 */
console.log("查看 /tmp 目录");
fs.readdir("./tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

/**
 * 删除目录
 */
console.log("准备删除目录 /tmp/test");
/*fs.rmdir("./tmp/test、",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("/tmp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});*/
