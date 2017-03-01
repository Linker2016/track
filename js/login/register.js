/**
 * Created by Administrator on 2017/1/10.
 */
$("#register_btn").on("click",function(){
    var params ={
        username: $("#username").val(),
        password: $("#password").val(),
        password_copy: $("#password_copy").val()
    };
    $.ajax({
        data: params,
        url: '/register',
        dataType: 'json',
        cache: false,
        type:"post",
        timeout: 45000,
        success: function(data){
            alert(data.message);
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
});

$("#username").on("blur",function(){
    if(!$("#username").val())return;
    var option ={
        data:{username: $("#username").val()},
        url: '/userNameCheck',
        success: function(data){
            alert(data.message);
        }
    };
    callAjax(option);
    $.ajax({
        data: params,
        url: '/userNameCheck',
        dataType: 'json',
        cache: false,
        type:"post",
        timeout: 45000,
        success: function(data){
            alert(data.message);
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
});
