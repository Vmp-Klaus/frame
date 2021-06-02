// 点击复制信息
function copyTxt(txt) {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    // 要先判断当前是什么系统，否则会报错，无法执行语句
    if (isAndroid) {
        let _input = document.createElement('input') // 直接构建input
        _input.value = txt // 设置内容
        document.body.appendChild(_input) // 添加临时实例
        _input.select() // 选择实例内容
        document.execCommand('Copy') // 执行复制
        document.body.removeChild(_input) // 删除临时实例
        if (document.execCommand('Copy')) {
            alert('复制成功')
        } else {
            alert('复制失败，请手动复制')
        }
    } else {
        // 数字没有 .length 不能执行selectText 需要转化成字符串
        const textString = txt.toString()
        let input = document.querySelector('#copy-input')
        if (!input) {
            input = document.createElement('input')
            input.id = 'copy-input'
            input.readOnly = 'readOnly'
            input.style.position = 'absolute'
            input.style.left = '-1000px'
            input.style.zIndex = '-1000'
            document.body.appendChild(input)
        }

        input.value = textString
        // ios必须先选中文字且不支持 input.select()
        selectText(input, 0, textString.length)
        console.log(document.execCommand('copy'), 'execCommand')
        if (document.execCommand('copy')) {
            document.execCommand('copy')
            alert('复制成功')
        } else {
            alert('复制失败，请手动输入')
        }
        input.blur()
        document.body.removeChild(input)
        // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
        // 选择文本。createTextRange(setSelectionRange)是input方法
    }

}

function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) { // ie
        const range = textbox.createTextRange()
        range.collapse(true)
        range.moveStart('character', startIndex) // 起始光标
        range.moveEnd('character', stopIndex - startIndex) // 结束光标
        range.select() // 不兼容苹果
    } else { // firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex)
        textbox.focus()
    }
}
