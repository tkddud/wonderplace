$(document).ready(function(){
  const $header = $('header'),
        $headerHeight = $header.outerHeight()
  let   $subHeight = $(this).find("ul").outerHeight()

  $("nav div").hover(function(){
    // $(this).find("ul").css("opacity",1)
    // $header.stop().animate({height:$headerHeight+$subHeight + "px"},300)
    $header.stop().animate({height:100 + "px"},300)
  },function(){
    // $(this).find("ul").css("opacity",0)
    // $header.stop().animate({height:$headerHeight},200)
    $header.stop().animate({height:65 + "px"},300)
  })
  $("nav div").hover(function(){
    $(this).find("ul").stop().fadeToggle(300)
  })

  // 메인메뉴를 호버했을때
  // 태블릿용메뉴를 클릭하면 전체화면 메뉴가 나오게끔
  $(".tmclick").click(function(){
    $(".tmport").fadeIn()
  })
  $(".tmport button").click(function(){
    $(".tmport").fadeOut()
  })

  $("ul.mslide").bxSlider({
    mode:'fade',
    auto: true,
    controls:true
  })
  AOS.init();
  // 이 문서에서 AOS사용할 수 있게 기본적으로 깔아놓은 상태임
  $(".bxcover ul").bxSlider({
    maxSlides:4, 
    minSlides:2,
    // moveSlides:1,
    slideWidth:300,
    slideMargin:25,
    // auto:true,
    // pause:3000,
    // controls:false,
    // pager:false,
    speed:17000,
    ticker:true,
    tickerHover:true
  })
  

  $(window).scroll(function(){
    if($(this).scrollTop()>900){
      $(".topbtn").fadeIn()
    }else{
      $(".topbtn").fadeOut()
    }
  })
  $(".topbtn").click(function(){
    $('html,body').animate({
      scrollTop:0
    })
  })
})