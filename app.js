//show introdaction
$(function(){
var $p=$(".introduction p");
  $p.slideToggle( 2000, "linear" );

// slideToggle lists
var $mainLi=$('.mainLi').find("li")
$mainLi.on('click',function(){
  $(this).children().slideToggle();
});
// sticky menu
var $header=$(".header");
var $Top=$header.offset();
var $Top = $Top.top;

$(window).scroll(function (event){
  var $scroll = $(window).scrollTop();
  if($scroll>=$Top){
    $header.addClass("sticky");
  }else{
    $header.removeClass("sticky");
  };
});



  })
