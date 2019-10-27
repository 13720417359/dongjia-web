$(function(){
    const addressList = ['西安', '武汉', '长沙', '成都'];
    let nav_box = $(".nav_box"),
    listen = $(".listen"),
    myNum = /^1[3456789]\d{9}$/,
    no_pay = $(".btn"),
    teacher = $(".btn_01"),
    student = $(".btn_02"),
    listen_01 = $(".listen_01"),
    alert_box = $(".alert_box");
    
    
    $(document).ready(function(){
        $(".cut_02").click(function(){
            $(".T1").hide();
            $(".T2").show();
            $(".cut_01").css("color","#000");
            $(".cut_01").css("background","#FFF");
            $(".cut_02").css("color","#FFF");
            $(".cut_02").css("background","rgba(0,184,108,1)")
        })
        $(".cut_01").click(function(){
            $(".T1").show();
            $(".T2").hide();
            $(".cut_01").css("color","#FFF");
            $(".cut_01").css("background","rgba(0,184,108,1)");
            $(".cut_02").css("color","#000");
            $(".cut_02").css("background","#FFF")
        })
    })
    address('西安')
    //定位切换
    $(".add").click(function () {
        //console.log("杨磊");
        nav_box.toggle();
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
    //底部预约按钮弹框
    listen.click(function () {
        alert_box.css("display", "block");
    })
    $(".alert").click(function () {
        alert_box.css("display", "none");
    })
    //免费预约试听课弹框
    no_pay.click(function () {
        console.log("杨磊");
        if (myNum.test(input.value) && input.value.trim() != "") {
            $(".alert_box_sec").css("display", "block");
        } else {
            alert("提交失败")
        }
    })
    //免费预约名师弹框
    teacher.click(function () {
        console.log(input_01.value);
        if (myNum.test(input_01.value) && input_01.value.trim() != "") {
            $(".alert_box_sec").css("display", "block");
        } else {
            alert("提交失败")
        }
    })
    //获取语言学习方法弹框
    student.click(function () {
        if (myNum.test(input_02.value) && input_02.value.trim() != "") {
            $(".alert_box_sec").css("display", "block");
        } else {
            alert("提交失败")
        }
    })
    //弹框中的提交按钮
    $(".go").click(function(){
        if (myNum.test(go_pho.value) && go_pho.value.trim() != "") {
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
