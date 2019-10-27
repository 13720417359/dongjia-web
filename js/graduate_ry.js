$(function(){
    const addressList = ['西安', '武汉', '长沙', '成都'];
    let nav_box = $(".nav_box"),
        myNum = /^1[3456789]\d{9}$/,
        btn_01 = $(".btn_01"),
        btn_02 = $("#btn_02"),
        btn_send = $(".btn_send");
    address('西安');
    $(".add").click(function(){
        $(".nav_box").toggle();
    })
    $(".nav_box ul").on('click', 'li', function () {//DOM操作（事件冒泡写法）
        nav_box.css("display", "none");
        $(".add").html($(this).html());
        address($(this).html())
    })
    //区域初始化
    function address(address) {
        let changeList = []
        let htmlLi = ''
        addressList.forEach(value => {
            if (address != value) {
                changeList.push(value)
            }
        })
        changeList.forEach(value => {
            htmlLi += `<li>${value}</li>`
        })
        $('.nav_box ul').html(htmlLi)
    }
    //免费试听
    $(".listen").click(function(){
        $(".alert_box").css("display","block");
    })
    $(".alert").click(function(){
        $(".alert_box").css("display","none");
    })
    //免费领取
    btn_send.click(function(){
        $(".alert_box").css("display","block");
    })
    //button按钮
    btn_01.click(function(){
        console.log("123");
        if (myNum.test(input.value) && input.value.trim() != "") {
            $(".alert_box_sec").css("display", "block");
        } else {
            alert("提交失败")
        }
    })
    btn_02.click(function(){
        if (myNum.test(in_01.value) && in_01.value.trim() != "") {
            $(".alert_box_sec").css("display", "block");
        } else {
            alert("提交失败")
        }
    })
    //弹框点击确定即可关闭
    $(".right").click(function () {
        $(".alert_box_sec").css("display", "none");
    })
})