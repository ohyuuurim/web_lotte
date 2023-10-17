$(document).ready(function(){

  let $img = $("#ceo_img .ceo_img img");
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx){

    if(oldidx != idx){
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  /* 자동함수 생성 */
  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  }
  timer = setInterval(changeAuto,2000);


  $(".award_img2").hide();

  $(".award_btn2").click(function(){
    $(".award_img2").fadeIn(200);
    $(".award_img ").fadeOut(200);
  });

  $(".award_btn1").click(function(){
    $(".award_img").fadeIn(200);
    $(".award_img2").fadeOut(200);
  });

  $(".award_btn1").click(function(){
    $(".award_btn2").removeClass("aactive")
    $(".award_btn1").addClass("aactive")
  });

  $(".award_btn2").click(function(){
    $(".award_btn1").removeClass("aactive")
    $(".award_btn2").addClass("aactive")
  });

  
});