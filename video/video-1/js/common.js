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
             videoElement:document.getElementById('video'),//[����],videoԪ��;
             src:src,//[����],video src;
             loop:false,//[��ѡ],�Ƿ�ѭ��,Ĭ��false,trueΪѭ��;
             muted:false,//[��ѡ],�Ƿ���,Ĭ��false;
             poster:'../ossweb-img/1.jpg',//[��ѡ],videoĬ��ͼƬ;
             timesParam:[
                 {name:'showSkipBtn',time:3}
                 ],//[��ѡ],video currenttimeʱ���;
             onTimes:function(name){
                 console.log(name)
                 switch (name)
                 {
                     case 'showSkipBtn':
                         //to do;
                         //document.getElementById('toEnd').style.display='block';
                         break;
                 }
             },//[��ѡ],video currenttime�ص�;
             onStart:function(){
                 document.getElementById('loading').style.display='none';
                 console.log('video start');
             },//[��ѡ],video��һ��������ֻص�;
             onEnd:function(){
                 document.getElementById('end').style.display='block';
                 console.log('video end');
             }//[��ѡ],video������ɻص�;
         }
     );
     //console.log('videoPlayer.isVideoCanAutoPlay:',videoPlayer.isVideoCanAutoPlay);

     var btn=document.getElementById('startPlay');
     if(videoPlayer.isVideoCanAutoPlay){
         videoPlayer.play();
         console.log('��Ƶ�����Զ�����')
     }else{
         if(videoPlayer.paused){
             console.log('��Ƶ�����Զ�����')
             btn.style.display='block';
             btn.addEventListener('click',function(e){
                 btn.style.display='none';
                 videoPlayer.play();
             });
         }

     }
