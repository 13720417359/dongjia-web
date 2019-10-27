$(function(){
    const addressList = ['西安', '武汉', '长沙', '成都'];
    let nav_box = $(".nav_box"),
        myNum = /^1[3456789]\d{9}$/,
        year = $(".year"),
        year_01 = $(".year_01"),
        year_02 = $(".year_02");
    address('西安');
    $(".add").click(function(){
        $(".nav_box").toggle()
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
    //下面弹框
    $(".listen").click(function(){
        $(".alert_box").show();
    })
    //免费领取按钮弹框
    $(".btn_send").click(function(){
        $(".alert_box").show();
    })
    //点击黑色背景弹框消失
    $(".alert").click(function(){
        $(".alert_box").hide();
    })
    //页面button按钮
    year.click(function(){
        if (myNum.test(input.value) && input.value.trim() != "") {
            $(".alert_box_sec").css("display","block");
        } else {
            alert("提交失败")
        }
    })
    year_01.click(function(){
        if (myNum.test(input_01.value) && input_01.value.trim() != "") {
            $(".alert_box_sec").css("display","block");
        } else {
            alert("提交失败")
        }
    })
    year_02.click(function(){
        if (myNum.test(input_02.value) && input_02.value.trim() != "") {
            $(".alert_box_sec").css("display","block");
        } else {
            alert("提交失败")
        }
    })
    //提交成功后  点击确定按钮关闭窗口
    $(".right").click(function(){
        $(".alert_box_sec").hide();
    })
})