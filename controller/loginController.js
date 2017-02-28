/**
 * Created by Administrator on 2017/1/18.
 */

var user = require('../database/db').user;

exports.LOGIN_CONTROLLER = function(req, res){
    var query = {name: req.body.username, password: req.body.password};
    user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
        if(doc == 1){
            console.log(query.name + ": 登陆成功 " + new Date());
            res.json({"success":000});
        }else{
            console.log(query.name + ": 登陆失败 " + new Date());
            res.json({"error":008});
        }
    });
}