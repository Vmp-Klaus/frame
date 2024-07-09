; (function (global) {
    "use strict";

    var frame = function (config) {
        return new frame.prototype.init(config)
    };
    frame.prototype = {
        init: function (config) {
            this.config = config; // 包含 容器 图片数量 播放速度 路径 图片格式 自动播放
            this.count = 0; // 加载计数器
            this.images = []; // 图片数组
            this.index = 0; // 帧计数器
            this.time = null; // 定时器
            this.canvas = null; // canvas
            this.ctx = null; // 画布
            this.create()
            frameData.push(this)
        },
        create: function () {
            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = document.querySelector('.' + this.config.name + '').clientWidth;
            this.canvas.height = document.querySelector('.' + this.config.name + '').clientHeight;
            document.querySelector('.' + this.config.name + '').appendChild(this.canvas)
            this.laoding()
        },
        laoding: function () {
            var that = this;
            if (this.count < this.config.length) {
                var img = new Image();
                img.src = this.config.src + this.count + '.' + this.config.type + '';
                this.count == 0 ?
                    img.onload = function(){
                        that.render()
                    }
                    :
                    ''
                this.images.push(img)
                this.count++
                this.laoding()
            } else {
                this.updata()
            }
        },
        render: function () {
            this.images[this.index].complete ?
                this.images[this.index].width ?
                    (
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                        this.ctx.drawImage(this.images[this.index], 0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height)
                    )
                    :
                    ''
                :
                this.index > 2 ? this.index -= 2 : ''
        },
        updata: function () {
            var that = this;
            if (!that.config.auto) {
                clearInterval(that.time)
            } else {
                clearInterval(that.time)
                that.time = setInterval(function () {
                    if (that.index < that.config.length - 1) {
                        that.index++
                    } else {
                        that.config.loop ?
                            that.index = 0
                            :
                            (
                                that.config.auto = false,
                                that.updata(),
                                that.config.callback ? that.config.callback() : ''
                            )
                    }

                    that.render()
                }, that.config.speed)
            }
        }
    };
    frame.prototype.init.prototype = frame.prototype
    global.frame = frame;
    global.frameData = [];
    global.framePlay = function (name) {
        for (var i = 0; i < global.frameData.length; i++) {
            for (var n = 0; n < name.length; n++) {
                global.frameData[i].config.name == name[n] ?
                    (
                        global.frameData[i].config.auto = true,
                        global.frameData[i].updata()
                    )
                    :
                    (
                        global.frameData[i].config.auto = false,
                        global.frameData[i].updata()
                    )
            }
        }
    };
    global.framePause = function (name) {
        for (var i = 0; i < global.frameData.length; i++) {
            global.frameData[i].config.name == name ?
                (
                    global.frameData[i].config.auto = false,
                    global.frameData[i].updata()
                )
                :
                ''
        }
    }
})(this || window);