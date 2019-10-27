$(function () {
    const addressList = ['西安', '武汉', '长沙', '成都'];
    let nav_box = $(".nav_box");
    var data = { "city": "西安" };
    var html = '';
    address('西安')
    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1:8888/tallmake/api/tall/moblie/tallschool',
        contentType: "application/json", //必须这样写
        dataType: 'json',
        async: false,
        data: JSON.stringify(data),
        success: function (res) {
            //    console.log("-------------"+JSON.stringify(res));
            $("#phone").html(res.body.SchoolList[0].officephone);
            $("#address").html(res.body.SchoolList[0].address);
            var objStr = JSON.stringify(res.body.SchoolList);
            var objArr = JSON.parse(objStr);
            console.log('objArr', objArr)
            //console.log(objArr)
            for (var i = 0; i < objArr.length; i++) {
                //console.log(objArr[i].languageName);
                //console.log(objArr[i].languageIcon);
                // console.log(objArr[i].languageDescription);
                //console.log(objArr[i].keyword);
                html += `<li>
                            <div class="list">
                                <a href="` + getPageUrl(objArr[i].languageCode)+ `" class="a">
                                <img src="`+objArr[i].languageIcon+`" alt="" class="name">
                            <div>
                            <p class="subject">`+ objArr[i].languageName + `<span class="classify">` + objArr[i].keyword + `</span></p>
                            <p class="con">`+ objArr[i].languageDescription + `</p>
                            </div>
                            <img src="images/main/arrow.png" alt="" class="right">
                            </a>
                            </div>
                         </li>`;
            }
            $("#show").html(html);
        }
    });
    $(".add").click(function () {
        //console.log("杨磊");
        nav_box.toggle();
    })
    $(".nav_box ul").on('click', 'li', function () {//DOM操作（事件冒泡写法）
        // console.log('11222')
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
})