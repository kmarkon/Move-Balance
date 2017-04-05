$(function(){


// slideToggle lists
var $mainLi=$('.mainLi').find("li")
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
  }else{
    $header.removeClass("sticky");
  };
});

// sections2, section4
  var $section2=$(".section2");
    $section2.hide();
    $section2.show(1500);

  var $section4=$(".section4");
    $section4.hide();

  var $Section4position=$(".section4").offset().top;/*pobieranie pozycji elementu*/
    $(window).scroll(function(){
      if (document.body.scrollTop >$Section4position|| document.documentElement.scrollTop > $Section4position) {
            $section4.show(1500);
    };
});/*koniec scroll section2 i section4*/





  })/*koniec function*/
