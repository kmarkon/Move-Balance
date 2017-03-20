//pojawienie się introdaction
$(function(){
var $p=$(".introduction p")
  console.log($p)
  $p.slideToggle( 2000, "linear" );

// servicios
var $serviciosLi=$('.serviciosList');
var $servicios=$('.servicios').on("mouseenter", function(){
  $serviciosLi.slideDown();
});
var $servicios=$('.servicios').on("mouseleave", function(){
  $serviciosLi.slideUp();
});










});
