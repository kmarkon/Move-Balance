$(function(){

/*slideToggle lists*/
var $mainLi=$('.mainLi').find("a")
  $mainLi.on('mouseenter',function(){
    $(this).children().slideDown();
  });
  $mainLi.on('mouseleave',function(){
    $(this).children().slideUp();
  });

/*sticky menu*/
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
/*section1_servicios, section1_nosotros*/
var $section1_servicios=$(".section1_servicios");
  $section1_servicios.hide();
  $section1_servicios.show(1500);

  var $section1_nosotros=$(".section1_nosotros");
  $section1_nosotros.hide();
  $section1_nosotros.show(1500);

/*sections2, section4*/

  var $section2=$(".section2");
    $section2.hide();
    $section2.show(1500);

  var $section4=$(".section4");
    $section4.hide();

  var $Section4position=$(".section4").offset().top;/*pobieranie pozycji elementu*/
    $(window).scroll(function(){
      if (document.body.scrollTop >$Section4position|| document.documentElement.scrollTop > $Section4position) {
            $section4.show(2000);
    };
});/*koniec scroll section4*/

/*Panel*/
// var $bar=$("#bars");
// var $Panel=$(".Panel");
//   var $PanelWidth=$Panel.width();/*to get width of mobile menu*/
//
//   $Panel.css("left",-$PanelWidth);
//
//
//     $bar.on('click', function(){
//       // $Panel.css("left","0");
//       $Panel.addClass("PanelAnimation");
//
//     });







  })/*koniec function*/

  document.addEventListener("DOMContentLoaded", function(){
  /*slider nosotros*/

  var slideIndex=0;
  carousel();
  function carousel(){
    var i;
    var li=document.querySelectorAll(".slider_nosotros li");

      for(i=0; i<li.length; i++){
        li[i].style.display="none";
      }
      slideIndex++;
      if(slideIndex>li.length){
        slideIndex=1;
      }
      li[slideIndex-1].style.display="block";
      setTimeout(carousel,2500);
    }

  })
