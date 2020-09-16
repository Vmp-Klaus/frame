//导航
function closeNav(){
    $(".header-nav").removeClass("open-nav");
    $(".btn-nav").removeClass("nav-close");
    $("body").unbind("touchmove", false);
    PTTSendClick('nav','close','关闭头部导航');
}
function openNav(){
    $(".header-nav").addClass("open-nav");
    $(".btn-nav").addClass("nav-close");
    $("body").bind("touchmove", false);
    PTTSendClick('nav','open','打开头部导航');
}
$(".btn-nav").on('touchend',function(event) {
   if($(".open-nav").length) {
      closeNav()
   } else {
      openNav()
   }
});
