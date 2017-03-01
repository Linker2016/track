/**
 * Created by Administrator on 2017/2/3.
 */
function callAjax(option){
    typeof(option.data) == undefind ? option.data = "": "";
    typeof(option.url) == undefind ? option.url = "/": "";
    typeof(option.dataType) == undefind ? option.dataType = "json": "";
    typeof(option.cache) == undefind ? option.cache = false: "";
    typeof(option.type) == undefind ? option.type = "post": "";
    typeof(option.timeout) == undefind ? option.timeout = 45000: "";
    typeof(option.success) == undefind ? option.success = null: "";
    typeof(option.error) == undefind ? option.error = errorHandler(): "";

    $.ajax({
        data: option.data,
        url: option.url,
        dataType: option.dataType,
        cache: option.cache,
        type:option.type,
        timeout: option.timeout,
        success: option.success,
        error: option.error
    });
}

function errorHandler(jqXHR, textStatus, errorThrown){
    alert('error ' + textStatus + " " + errorThrown);
}