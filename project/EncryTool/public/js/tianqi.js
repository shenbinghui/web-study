function tianqi() {
    var KEY = 'rsqhxjswpe6y6ncu';
    var UID = 'UB5EFFE14B';
    var API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
    var LOCATION = "beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式
    // 获取当前时间戳
    var ts = Math.floor((new Date()).getTime() / 1000);
    // 构造验证参数字符串
    var str = "ts=" + ts + "&uid=" + UID;
    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
    // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
    var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
    sig = encodeURIComponent(sig);
    str = str + "&sig=" + sig;

    var jsonpCallback = function(data) {
    console.log(data);
}

    // 构造最终请求的 url
    var url = API + "?location=" + LOCATION + "&" + str + "&callback=jsonpCallback";

    // 直接发送请求进行调用，手动处理回调函数
    // 向 HTML 中动态插入 script 标签，通过 JSONP 的方式进行调用
    // var newScript = document.createElement('script');
    // newScript.type = 'text/javascript';
    // newScript.src = url;
    // $('body').append(newScript);

    $.ajax({
             url:url,
             dataType:"jsonp",
             jsonp:"jsonpcallback",
             success:function(data){
                 console.log(data);
             }
    });

}



$(function() {
    var provinceSec = '';
    var city = '';
    var provinceJson;

    //页面第一次加载执行
    $.getJSON('/config/pcity.json', function(data) {
        provinceJson = data;
        for (var i = 0; i < data.length; i++) {
            provinceSec += '<option value=' + data[i].province + '>' + data[i].province + '</option>';
            if (i == 0) {
                for (var j = 0; j < data[0].city.length; j++) {
                    city += '<option value=' + data[0].city[j] + '>' + data[0].city[j] + '</option>';
                }
            }
        }
        $('#province').html(provinceSec);
        $('#city').html(city);
    });

    //select改变执行
    $('#province').change(function() {
        var cites = '';
        for (var i = 0; i < provinceJson.length; i++) {
            if (provinceJson[i].province === $(this).val()) {
                for (var j = 0; j < provinceJson[i].city.length; j++) {
                    cites += '<option value=' + provinceJson[i].city[j] + '>' + provinceJson[i].city[j] + '</option>';
                }
                $('#city').html(cites);
            }

        }
    });

    $('#tqBtn').click(function() {
        // console.log($('#province').val());
        // console.log($('#city').val());
        //直接发送请求获取天气信息
        tianqi();
        // $.getJSON('https://api.seniverse.com/v3/weather/now.json?key=rsqhxjswpe6y6ncu&location=beijing&language=zh-Hans&unit=c',function(data){
        //      console.log(data.now);
        // })
    });

    //学习回顾一下
    // console.log($('#province').val('hbs')); //select 选中那个
    // console.log($('#province').val()); //select 选中的值是多少
    // console.log($('#province option').length);  //option长度
    // var te = '<option value="gds">广东省</option>';
    // $('#province').append(te);  //在原有的基础上追加
    // $("#province").html(te);   //覆盖原来内容插入现在内容
    // console.log($('#province option').eq(0).val());  //选择第n个值，下标从0开始
});