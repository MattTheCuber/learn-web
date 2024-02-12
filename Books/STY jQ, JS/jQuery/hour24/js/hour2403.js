$(document).ready( function() {
  checkForMobile();
  $("#sizeSlide").on("change", function() { $("img").width(210*$(this).val()/100); });
  $("#fadeSlide").on("change", function() { $("img").css({opacity:$(this).val()}); });
  $("#flip").on("change", function() { 
    if($(this).val() == "on") { $("img").show(); }
    else { $("img").hide(); } });
});