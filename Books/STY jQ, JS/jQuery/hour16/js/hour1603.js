function addCustomSearchEngine() {
  var cx = "####";
  var src = 'http:///www.google.com/cse/cse.js?cx=' + cx;
  var search = $("<script></script");
  search.attr("src", src).attr("async",true);
  $("head").prepend(search);
}
$(document).ready(function() {
  addCustomSearchEngine();
  $("#content").prepend("<gcse:search></gcse:search>");      
});