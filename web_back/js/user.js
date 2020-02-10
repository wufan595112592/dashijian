
var user = {
    // 用户进入
    login: (name, password) => {
        // $.post(url,数据).then(回调)
        $.post(jiekou.jinru, {
            'user_name': name,
            password
        }).then(res => {
            if (res.code === 200) {
                alert('登陆成功')
                window.location.href = 'index.html';
            } else {
                alert(res.msg)
            }
        })
    },
    // 用户退出
    logout: () => {
        $.post(jiekou.tuichu).then(res => {
            if (res.code === 200) {
                alert('您以退出成功')
                window.location.href = 'login.html';
            } else {
                alert(res.msg)
            }
        })
    },
    gitInfo: () => {
        $.get(jiekou.xinxi).then(res => {
            console.log(res);

            if (res.code === 200) {
                $('#name').text(res.data.nickname)
                $('.aimg').attr('src', res.data.user_pic)
            }
            else {
                alert(res.msg)
            }
        })
    }
}
