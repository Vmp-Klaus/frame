// ���������Ϣ
function copyTxt(txt) {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    // Ҫ���жϵ�ǰ��ʲôϵͳ������ᱨ���޷�ִ�����
    if (isAndroid) {
        let _input = document.createElement('input') // ֱ�ӹ���input
        _input.value = txt // ��������
        document.body.appendChild(_input) // �����ʱʵ��
        _input.select() // ѡ��ʵ������
        document.execCommand('Copy') // ִ�и���
        document.body.removeChild(_input) // ɾ����ʱʵ��
        if (document.execCommand('Copy')) {
            alert('���Ƴɹ�')
        } else {
            alert('����ʧ�ܣ����ֶ�����')
        }
    } else {
        // ����û�� .length ����ִ��selectText ��Ҫת�����ַ���
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
        // ios������ѡ�������Ҳ�֧�� input.select()
        selectText(input, 0, textString.length)
        console.log(document.execCommand('copy'), 'execCommand')
        if (document.execCommand('copy')) {
            document.execCommand('copy')
            alert('���Ƴɹ�')
        } else {
            alert('����ʧ�ܣ����ֶ�����')
        }
        input.blur()
        document.body.removeChild(input)
        // input�Դ���select()������ƻ�����޷�����ѡ��������Ҫ�Լ�ȥдһ�����Ƶķ���
        // ѡ���ı���createTextRange(setSelectionRange)��input����
    }

}

function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) { // ie
        const range = textbox.createTextRange()
        range.collapse(true)
        range.moveStart('character', startIndex) // ��ʼ���
        range.moveEnd('character', stopIndex - startIndex) // �������
        range.select() // ������ƻ��
    } else { // firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex)
        textbox.focus()
    }
}
