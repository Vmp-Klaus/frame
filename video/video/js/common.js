$(function(){
    //��ǰ��Ƶindex
    var active = 0;
    //��Ƶ����
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

    //����loadingͼƬ
    $('#loading img').attr('src',data[active].loadingImg)
    //����endͼƬ
    $('#end img').attr('src',''+data[active].loadingImg+'')
    //��Ƶ����
    var oBj = document.getElementById('video')
    console.log(oBj)
    var videoPlayer=new MMD.VideoPlayer(
        {
            videoElement:oBj,//[����],videoԪ��;
            src:data[active].src,//[����],video src;
            loop:false,//[��ѡ],�Ƿ�ѭ��,Ĭ��false,trueΪѭ��;
            muted:false,//[��ѡ],�Ƿ���,Ĭ��false;
            poster:data[active].loadingImg,//[��ѡ],videoĬ��ͼƬ;
            timesParam:[
                {name:'showSkipBtn',time:1}
            ],//[��ѡ],video currenttimeʱ���;ִ��ʲô��
            onTimes:function(name){
                switch (name)
                {
                    case 'showSkipBtn':
                        break;
                }
            },//[��ѡ],video currenttime�ص�;
            onStart:function(){
                document.getElementById('loading').style.display='none';
                console.log('���ֵ�һ֡��,���ؼ���icon btn');
                $('.load-icon').hide()
                btn.style.display='none';
            },//[��ѡ],video��һ��������ֻص�;
            onEnd:function(){
                document.getElementById('end').style.display='block';
                console.log('��Ƶ��������');
                btn.style.display='block';
            }//[��ѡ],video������ɻص�;
        }
    );
    //���Ű�ť
    var btn=document.getElementById('play-btn');
    //�жϵ�ǰ�����Ƿ�����Զ�����
    if(videoPlayer.isVideoCanAutoPlay){
        console.log('��Ƶ�����Զ����� ��ʾ����icon')
        videoPlayer.play();
        $('.load-icon').show()
    }else{
        if(videoPlayer.paused){
            console.log('��Ƶ�����Զ����� ���ؼ���icon')
            $('.load-icon').hide()
            btn.style.display='block';
        }

    }
    //���Ű�ť
    btn.addEventListener('click',function(e){
        btn.style.display='none';
        videoPlayer.play();
        $('.load-icon').show()
        console.log('������Ű�ť ���ذ�ť ��ʾ ����')
    });
    //��Ƶ����
    function taggVideo(){
        //��ͣ��Ƶ
        videoPlayer.pause()
        //��ʾͼƬ����
        $('#loading').show()
        //������Ƶ����
        videoPlayer.src = data[active].src;
        //����loadingͼƬ
        $('#loading img').attr('src',data[active].loadingImg)
        //����endͼƬ
        $('#end img').attr('src',''+data[active].loadingImg+'')
        //��ʾvideo
        $('#video').show()
        //��ʾ����
        $('.load-icon').show()
        console.log('�л���Ƶ�� ��ʾ����...')
        //������Ƶ
        videoPlayer.play()
        console.log('�ж���Ƶ�Ƿ��ڲ���',videoPlayer.paused)
    }
    //�����л���Ƶ
    EventUtil.listenTouchDirection(document.querySelector('.video-box'), false,
        //����
        function(){
            return
        },
        //����
        function(){
            if(active > 0){
                active --;
            }else{
                active = data.length -1;
            }
            //�л���Ƶ
            taggVideo()
            //console.log(active,data.length,'��')
        },
        //����
        function(){
            return
        },
        //����
        function(){
            if(active < data.length-1){
                active ++;
            }else{
                active = 0;
            }
            //�л���Ƶ
            taggVideo()
            //console.log(active,data.length,'��')
    });


})
