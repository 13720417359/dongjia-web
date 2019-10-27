$(function () {
    const addressList = ['西安', '武汉', '长沙', '成都'];
    let nav_box = $(".nav_box"),
        listen = $(".listen"),
        alert_box = $(".alert_box"),
        no_pay = $("#no_pay"),
        myNum = /^1[3456789]\d{9}$/,
        teacher = $("#teacher"),
        student = $("#student"),
        listen_01 = $("#listen_01"),
        img_tab = ['images/kaoshi.jpg','images/chengji.jpg','images/gaokao.jpg','images/Study.jpg']
    var data = { "city": "西安", "languageCode": "fayu" }
    html = '';
    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1:8888/tallmake/api/tall/moblie/tallschoolSecond',
        contentType: "application/json", //必须这样写
        dataType: 'json',
        async: false,
        data: JSON.stringify(data),
        success: function (res) {
            console.log("-------------" + JSON.stringify(res));
            var objStr = JSON.stringify(res.body.SecondList);
            var objArr = JSON.parse(objStr);
            objArr.forEach((element,index) => {
                html += `<li>
                <a href="./french_onebyone.html">
                  <img src="${img_tab[index]}">`
                    + element.languageNameSecond +
                    `</a>
              </li>`
            })
            $(".choose").html(html);
        }
    });
    address('西安')
    //定位切换
    $(".add").click(function () {
        console.log("杨磊");
        nav_box.toggle();
    })
    $(".nav_box ul").on('click', 'li', function () {//DOM操作（事件冒泡写法）
        nav_box.css("display", "none");
        $(".add").html($(this).html());
        address($(this).html())
    })
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
    //免费预约试听课
    listen_01.click(function () {
        if (myNum.test(input_03.value) && input_03.value.trim() != "") {
            $(".alert_box_sec").css("display", "block");
        } else {
            alert("提交失败")
        }
    })
    //弹框点击确定即可关闭
    $(".right").click(function () {
        $(".alert_box_sec").css("display", "none");
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
