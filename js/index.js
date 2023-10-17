$(document).ready(function(){

  $(".gnb").hover(function(){
    $(this).find(".main .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  $(".s1").click(function(){
    $(this).toggleClass("factive");
    $(".footmenu1 .fbox1").stop().slideToggle();
  });
    $(".s2").click(function(){
    $(this).toggleClass("factive");
    $(".footmenu2 .fbox2").stop().slideToggle();
  });

});