$(document).ready(function() {
  $("#img1").click(function(e) {
    $(this).effect("shake", {direction:"down", distance:20, times:5}, 3000);
  });        
  $("#img2").click(function(e) {
    $(this).effect("scale", 
      {direction:"both", origin:["middle", "right"], percent:40, scale:"box", 
       easing:"easeInBounce"}, 3000);
  }); 
  $("#img3").click(function(e) {
    $(this).effect("slide", {direction:"down", distance:200}, 3000, function(){
      $(this).effect("slide", {direction:"right", distance:200}, 3000);
    });
  }); 
  $("#img4").click(function(e) {
    $(this).effect("explode", {pieces:16}, 3000);
  });
  $("#img5").click(function(e) {
    $(this).effect("pulsate", {times:5}, 2000);
  });
  $("#img6").click(function(e) {
    $(this).effect("puff", {percent:1260}, 2000);
  });
  $("#img7").click(function(e) {
    $(this).effect("drop", {direction:"right"}, 3000);
  });
  $("#img8").click(function(e) {
    $(this).effect("slide", {direction:"left", distance:200}, 3000);
  });
  $("#img9").click(function(e) {
    $(this).effect("transfer", {to:$("#img3"), easing:"easeInBack"}, 3000);
  });
  $("#img10").click(function(e) {
    $(this).effect("bounce", {distance:500, times:10 , easing:"easeInOutBounce"}, 3000);
  });
});