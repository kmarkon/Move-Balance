$(function(){

/*slideToggle lists*/
var $mainLi=$('.mainLi').find("a.sub");
// console.log($mainLi);

  $mainLi.on('click',function(e){
    e.preventDefault();
    $(this).next().slideToggle();
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
/*section1_servicios, section1_nosotros. section1_contacto*/
var $section1_servicios=$(".section1_servicios");
  $section1_servicios.hide();
  $section1_servicios.show(1500);

  var $section1_nosotros=$(".section1_nosotros");
  $section1_nosotros.hide();
  $section1_nosotros.show(1500);

  var $section1_contacto=$(".section1_contacto");
  $section1_contacto.hide();
  $section1_contacto.show(1500);

/*sections2, section4*/

  var $section2=$(".section2");
    $section2.hide();
    $section2.show(1500);


  var $section4=$(".section4");
if($section4.length==1){/*sprawdzanie czy na danej podstronie istnieje section4*/
    $section4.hide();
    var $Section4position=$(".section4").offset().top;/*pobieranie pozycji elementu*/
    $(window).scroll(function(){
      if (document.body.scrollTop >$Section4position|| document.documentElement.scrollTop > $Section4position) {
            $section4.show(2000);
    };
});/*koniec scroll section4*/
}

/*Menu bars*/
var $bar=$("#bars");
var $menu=$(".menu");

    $bar.on('click',function(){
    $menu.toggleClass("mobile");
  });
var $sub=$(".submenu").find("a");
  $sub.on("click",function(){
  var $submenu=$(".submenu");
  $submenu.slideUp();
  $menu.removeClass("mobile");
})

});/*koniec function*/

  document.addEventListener("DOMContentLoaded", function(){
  /*slider nosotros*/

    var slideIndex=0;
    carousel();
    function carousel(){
      var i;
      var li=document.querySelectorAll(".slider_nosotros li");
      var ul=document.querySelectorAll(".slider_nosotros");
      if(ul.length==1){/*sprawdzanie czy na danej podstronie istnieje slider_nosotros*/
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
    }
  })
