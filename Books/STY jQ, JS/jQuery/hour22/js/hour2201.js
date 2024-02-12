$(document).ready(function() {
    checkForMobile();
    $("#pageOne").on("swipeleft", function() {
        $.mobile.changePage("#pageTwo", {transition:"slide"}); });
    $("#pageTwo").on("swiperight", function() {
        $.mobile.changePage("#pageOne", {transition:"slide", reverse:true}); });
    $("#pageTwo").on("swipeleft", function() {
        $.mobile.changePage("hour2201-page3.html", {transition:"slide", }); });
    $(document).on("pageload", function(e, obj) {
    if($("#pageThree .ui-content").length) {
        $("#pageThree .ui-content").append("Page loaded from: "+ obj.url); }
    });
});