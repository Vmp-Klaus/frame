    var active = 0;
    var data = [
        {
            src:'ossweb-img/video-1.mp4',
            loadingImg:'ossweb-img/1.jpg',
            endImg:'ossweb-img/1-1.jpg'
        },
        {
            src:'ossweb-img/video-1.mp4',
            loadingImg:'ossweb-img/2.jpg',
            endImg:'ossweb-img/2-1.jpg'
        }
    ]



     //
     var src= data[active].src;
     var videoPlayer=new MMD.VideoPlayer(
         {
             videoElement:document.getElementById('video'),//[必填],video元素;
             src:src,//[必填],video src;
             loop:false,//[可选],是否循环,默认false,true为循环;
             muted:false,//[可选],是否静音,默认false;
             poster:'../ossweb-img/1.jpg',//[可选],video默认图片;
             timesParam:[
                 {name:'showSkipBtn',time:3}
                 ],//[可选],video currenttime时间点;
             onTimes:function(name){
                 console.log(name)
                 switch (name)
                 {
                     case 'showSkipBtn':
                         //to do;
                         //document.getElementById('toEnd').style.display='block';
                         break;
                 }
             },//[可选],video currenttime回调;
             onStart:function(){
                 document.getElementById('loading').style.display='none';
                 console.log('video start');
             },//[可选],video第一个画面出现回调;
             onEnd:function(){
                 document.getElementById('end').style.display='block';
                 console.log('video end');
             }//[可选],video播放完成回调;
         }
     );
     //console.log('videoPlayer.isVideoCanAutoPlay:',videoPlayer.isVideoCanAutoPlay);

     var btn=document.getElementById('startPlay');
     if(videoPlayer.isVideoCanAutoPlay){
         videoPlayer.play();
         console.log('视频可以自动播放')
     }else{
         if(videoPlayer.paused){
             console.log('视频不能自动播放')
             btn.style.display='block';
             btn.addEventListener('click',function(e){
                 btn.style.display='none';
                 videoPlayer.play();
             });
         }

     }
