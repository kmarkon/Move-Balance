//pojawienie się introdaction
$(function(){
var $p=$(".introduction p");
  $p.slideToggle( 2000, "linear" );

// slideToggle lists
var $mainLi=$('.mainLi').find("li")
$mainLi.on('click',function(){
//   console.log('aaa')
  $(this).children().slideToggle();

});



  })
