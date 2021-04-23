$(function(){
    //当前视频index
    var active = 0;
    //视频数据
    var data = [
        {
            src:'ossweb-img/video-1.mp4',
            loadingImg:'ossweb-img/1.jpg',
            endImg:'ossweb-img/1-1.jpg'
        },
        {
            src:'ossweb-img/video-2.mp4',
            loadingImg:'ossweb-img/2.jpg',
            endImg:'ossweb-img/2-1.jpg'
        },
        {
            src:'ossweb-img/video-1.mp4',
            loadingImg:'ossweb-img/1.jpg',
            endImg:'ossweb-img/1-1.jpg'
        },
        {
            src:'ossweb-img/video-2.mp4',
            loadingImg:'ossweb-img/2.jpg',
            endImg:'ossweb-img/2-1.jpg'
        }
    ]

    //更换loading图片
    $('#loading img').attr('src',data[active].loadingImg)
    //更换end图片
    $('#end img').attr('src',''+data[active].loadingImg+'')
    //视频播放
    var oBj = document.getElementById('video')
    console.log(oBj)
    var videoPlayer=new MMD.VideoPlayer(
        {
            videoElement:oBj,//[必填],video元素;
            src:data[active].src,//[必填],video src;
            loop:false,//[可选],是否循环,默认false,true为循环;
            muted:false,//[可选],是否静音,默认false;
            poster:data[active].loadingImg,//[可选],video默认图片;
            timesParam:[
                {name:'showSkipBtn',time:1}
            ],//[可选],video currenttime时间点;执行什么事
            onTimes:function(name){
                switch (name)
                {
                    case 'showSkipBtn':
                        break;
                }
            },//[可选],video currenttime回调;
            onStart:function(){
                document.getElementById('loading').style.display='none';
                console.log('出现第一帧了,隐藏加载icon btn');
                $('.load-icon').hide()
                btn.style.display='none';
            },//[可选],video第一个画面出现回调;
            onEnd:function(){
                document.getElementById('end').style.display='block';
                console.log('视频播放完了');
                btn.style.display='block';
            }//[可选],video播放完成回调;
        }
    );
    //播放按钮
    var btn=document.getElementById('play-btn');
    //判断当前环境是否可以自动播放
    if(videoPlayer.isVideoCanAutoPlay){
        console.log('视频可以自动播放 显示加载icon')
        videoPlayer.play();
        $('.load-icon').show()
    }else{
        if(videoPlayer.paused){
            console.log('视频不能自动播放 隐藏加载icon')
            $('.load-icon').hide()
            btn.style.display='block';
        }

    }
    //播放按钮
    btn.addEventListener('click',function(e){
        btn.style.display='none';
        videoPlayer.play();
        $('.load-icon').show()
        console.log('点击播放按钮 隐藏按钮 显示 加载')
    });
    //视频函数
    function taggVideo(){
        //暂停视频
        videoPlayer.pause()
        //显示图片容器
        $('#loading').show()
        //更换视频连接
        videoPlayer.src = data[active].src;
        //更换loading图片
        $('#loading img').attr('src',data[active].loadingImg)
        //更换end图片
        $('#end img').attr('src',''+data[active].loadingImg+'')
        //显示video
        $('#video').show()
        //显示加载
        $('.load-icon').show()
        console.log('切换视频了 显示加载...')
        //播放视频
        videoPlayer.play()
        console.log('判断视频是否在播放',videoPlayer.paused)
    }
    //滑动切换视频
    EventUtil.listenTouchDirection(document.querySelector('.video-box'), false,
        //向上
        function(){
            return
        },
        //向右
        function(){
            if(active > 0){
                active --;
            }else{
                active = data.length -1;
            }
            //切换视频
            taggVideo()
            //console.log(active,data.length,'右')
        },
        //向下
        function(){
            return
        },
        //向左
        function(){
            if(active < data.length-1){
                active ++;
            }else{
                active = 0;
            }
            //切换视频
            taggVideo()
            //console.log(active,data.length,'左')
    });


})
