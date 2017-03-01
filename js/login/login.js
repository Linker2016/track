/**
 * Created by Administrator on 2017/1/10.
 */
$("#login_btn").on("click",function(){
    var params ={
        username: $("#username").val(),
        password: $("#password").val()
    };
    $.ajax({
        data: params,
        url: '/userLogin',
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
