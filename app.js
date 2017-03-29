$(function(){


// slideToggle lists
var $mainLi=$('.mainLi').find("li")
// $mainLi.on('click',function(){
//   $(this).children().slideToggle();
// });
$mainLi.on('mouseenter',function(){
  $(this).children().slideDown();
});
$mainLi.on('mouseleave',function(){
  $(this).children().slideUp();
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

//sections2, section4
var $section2=$(".section2");
    $section2.hide();
    $section2.show(4000);
var $section4=$(".section4");
    $section4.hide();
    $section4.show(4000);



  })
