$(document).ready(function(){

    /* old는 처음 있던 이미지, new는 다음에 올 이미지 */
    let oimg=0;
    let nimg=0;
  
    $(".thumbs a").click(function(){
  
      nimg=$(this).index();
      $(".thumbs a").eq(oimg).removeClass("on"); //썸네일 클래스 사라짐
      $(".thumbs a").eq(nimg).addClass("on"); //썸네일 클래스 불러옴
      $("#largeImg>img").eq(oimg).stop().fadeOut(1000); //기존이미지 사라짐
      $("#largeImg>img").eq(nimg).stop().fadeIn(1000);//새이미지 나타남
        oimg = nimg; //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut
      return false;
    });

    
  $(".tab li").click(function(){

    let num = $(this).index();
    let move = 100*num;  /* 세로높이 70px씩 증가됨 */
    
    $(".tab-header .tab-highlight").animate({top:move});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+result).addClass("active");
  });

});
