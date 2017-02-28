/**
 * Created by Administrator on 2017/1/18.
 */

var user = require('../database/db').user;

exports.REGISTER_CONTROLLER = function(req, res){
    if(req.body.password !== req.body.password_copy)return res.json({erro:"016","message":"两次密码输入不一致！"});
    var doc = {name : req.body.username, password : req.body.password};
    var mongooseEntity = new user(doc);
    mongooseEntity.save(doc, function(err){
        if(err) {
            console.log(err);
            res.json({erro:"008","message":"注册失败！"});
        } else {
            console.log('save ok');
            res.json({success:"000","message":"注册成功！"});
        }
    });
}
exports.USER_CHECK_CONTROLLER = function(req, res){
    if(!req.body.username)return res.json({erro:"016","message":"请输入正确的用户名！"});
    var query = {name : req.body.username};
    user.count(query, function(err,doc){
        if(doc == 0) {
            res.json({success:"000","message":"可以使用！"});
        } else {
            res.json({erro:"008","message":"该用户名已被注册！"});
        }
    });
}