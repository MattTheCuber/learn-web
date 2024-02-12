var minHorizontalRatio = 400/600;
function randInt(max) { return Math.floor((Math.random()*max)); }
function setImage() {
    var images = ["boy", "flower2", "sunset2", "boy2", "bison", "falls", "peak"];
    var newPhoto = './images/'+ images[randInt(7)] + '.jpg';
    var horizontal = (minHorizontalRatio > $("#photo img").height()/$("#photo img").width());
    $("#photo img").stop(true).fadeTo(500, .1, "linear", function () {
        $("#photo img").attr("src", newPhoto); });
        if (horizontal) { $("#photo img").css({width:600,height:"auto"}); }
        else { $("#photo img").css({width:"auto",height:400}); }
    $("#photo img").fadeTo(500, 1);
    return false;
}
$(document).ready(function() {
    setTimeout(function(){ setImage(); }, 500);
});