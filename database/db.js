/**
 * Created by linker on 2017/1/12.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://60.205.201.240:27017/mydb');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
    name: String,
    password: String
});
//  定义了一个新的模型，但是此模式还未和users集合有关联
exports.user = db.model('users', userScheMa); //  与users集合关联

//链接错误
db.on("error", function(err){
   console.log(err.stack);
});