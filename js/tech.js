$(document).ready(function(){

  $(".techtab li").click(function(){


    for(i=0;i<5;i++){
      $(".techtab li").find("a");
    }
    
    $(".techtab li").removeClass("tactive");
    $(this).siblings().removeClass("tactive");
    $(this).addClass("tactive");

    let result = $(this).attr("data-alt");

    $(".techtabContents div").removeClass("tactive");
    $("#" + result).addClass("tactive");

  });

});
