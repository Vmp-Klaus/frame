var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent) element.attachEvent("on" + type, handler);
        else element["on" + type] = handler;
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if (element.detachEvent) element.detachEvent("on" + type, handler);
        else element["on" + type] = handler;
    },
    /**
     * @param target Ҫ�󶨼�����Ŀ��Ԫ��
     * @param isPreventDefault �Ƿ����ε�����������Ĭ����Ϊ������ҳ������¹��������ŵȣ�
     * @param upCallback ���ϻ����ļ����ص����������ģ����Բ�������false��
     * @param rightCallback ���һ����ļ����ص����������ģ����Բ�������false��
     * @param downCallback ���»����ļ����ص����������ģ����Բ�������false��
     * @param leftCallback ���󻬶��ļ����ص����������ģ����Բ�������false��*/
    listenTouchDirection: function (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
        this.addHandler(target, "touchstart", handleTouchEvent);
        this.addHandler(target, "touchend", handleTouchEvent);
        this.addHandler(target, "touchmove", handleTouchEvent);
        var startX;
        var startY;

        function handleTouchEvent(event) {
            switch (event.type) {
                case "touchstart":
                    startX = event.touches[0].pageX;
                    startY = event.touches[0].pageY;
                    break;
                case "touchend":
                    var spanX = event.changedTouches[0].pageX - startX;
                    var spanY = event.changedTouches[0].pageY - startY;
                    if (Math.abs(spanX) > Math.abs(spanY)) { //�϶�Ϊˮƽ���򻬶�
                        if (spanX > 30) { //����
                            if (rightCallback) {
                                rightCallback();
                                console.log("right");
                            }

                        } else if (spanX < -30) { //����
                            if (leftCallback) {
                                leftCallback();
                                console.log("left");
                            }
                        }
                    }
                    // else { //�϶�Ϊ��ֱ���򻬶�
                    //     if (spanY > 30) { //����
                    //         if (downCallback) {
                    //             downCallback();
                    //             // console.log("down");
                    //         }
                    //     } else if (spanY < -30) {//����
                    //         if (upCallback) {
                    //             upCallback();
                    //             // console.log("up");
                    //         }
                    //     }
                    // }
                    break;
                    case "touchmove": //��ֹĬ����Ϊ
                    if (isPreventDefault) event.preventDefault();
                    break;
                }
            }
    }
};
