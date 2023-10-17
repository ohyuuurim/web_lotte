$(document).ready(function(){

  $(".re_tab li").click(function(){

    let num = $(this).index();
    let move = 300*num;
    
    $(".re_tab-header .re_tab-highlight").animate({left:move});
    $(this).siblings().removeClass("ractive");
    $(this).addClass("ractive");

    let result = $(this).attr("data-alt");
    $(".re_tab-contents div").removeClass("ractive");
    $("#"+result).addClass("ractive");
  });

  $(".modal-notice").click(function(){
    $(".modal").fadeIn();
  });
  $(".btn-close").click(function(){
    $(".modal").fadeOut();
  });

});
