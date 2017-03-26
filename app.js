//show section1
$(function(){
var $p=$(".section1 p");
  $p.slideToggle( 2000, "linear" );

// slideToggle lists
var $mainLi=$('.mainLi').find("li")
$mainLi.on('click',function(){
  $(this).children().slideToggle();
});
// sticky menu
var $header=$("header");
var $Top=$header.offset();
var $Top = $Top.top;
var $Logo=$('.logo');

$(window).scroll(function (event){
  var $scroll = $(window).scrollTop();
  if($scroll>=$Top){
    $header
    .addClass("sticky")
    .css("background-color",'white');
    $Logo/*zmiana logo na mniejsze*/
    .css("background-image", 'url("images/move-balance2.png")')
    .addClass('newLogo')
    .css('height','70px');
  }else{
    $header.removeClass("sticky");
    $Logo
    .css("background-image", 'url("images/move-balance.png")')
    .removeClass('newLogo')
    .css('height','160px');
  };
});



  })
