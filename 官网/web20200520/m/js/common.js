//����
function closeNav(){
    $(".header-nav").removeClass("open-nav");
    $(".btn-nav").removeClass("nav-close");
    $("body").unbind("touchmove", false);
    PTTSendClick('nav','close','�ر�ͷ������');
}
function openNav(){
    $(".header-nav").addClass("open-nav");
    $(".btn-nav").addClass("nav-close");
    $("body").bind("touchmove", false);
    PTTSendClick('nav','open','��ͷ������');
}
$(".btn-nav").on('touchend',function(event) {
   if($(".open-nav").length) {
      closeNav()
   } else {
      openNav()
   }
});
