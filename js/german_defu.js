$(function(){
    const addressList = ['西安', '武汉', '长沙', '成都'];
    let myNum = /^1[3456789]\d{9}$/,
        nav_box = $(".nav_box"),
        btn_01 = $("#btn_01"),
        btn_02 = $("#btn_02"),
        btn_03 = $("#btn_03"),
        btn_send = $(".btn_send");
    address('西安')
    //定位下拉框
    $(".add").click(function(){
        //console.log("123");
        $(".nav_box").toggle();
    })
    $(".nav_box ul").on('click' , 'li' ,function(){
        nav_box.css("display","none"),
        $(".add").html($(this).html());
        address($(this).html())
    })
    //免费领取历年真题
    btn_01.click(function(){
        if(myNum.test(input.value) && input.value.trim() != ""){
            $(".alert_box_sec").css("display","block");
        }else{
            alert("提交失败")
        }
    })
    //免费领取学习计划
    btn_02.click(function(){
        if(myNum.test(input_01.value) && input_01.value.trim() != ""){
            $(".alert_box_sec").css("display","block");
        }else{
            alert("提交失败")
        }
    })
    //免费领取大礼包
    btn_03.click(function(){
        if(myNum.test(input_02.value) && input_02.value.trim() != ""){
            $(".alert_box_sec").css("display","block");
        }else{
            alert("提交失败")
        }
    })
    //banner下的免费领取按钮
    btn_send.click(function(){
        $(".alert_box").css("display","block")
    })
    $(".listen").click(function(){
        $(".alert_box").css("display","block")
    })
    $(".alert").click(function(){
        $(".alert_box").css("display","none")
    })
    //弹框点击确定即可关闭
    $(".right").click(function(){
        $(".alert_box_sec").css("display","none");
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
})