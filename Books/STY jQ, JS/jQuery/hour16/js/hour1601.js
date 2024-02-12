function addFBsdk() {
    $("body").prepend('<div id="fb-root"></div>');
    if ($("#facebook-jssdk").length == 0) {
         var fbSDK = document.createElement("script"); fbSDK.id = 'facebook-jssdk';
         fbSDK.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
         $("head").get(0).appendChild(fbSDK);
    }
}
function addFBlike(href, element) {
    var like = $('<div class="fb-like"></div>');
    like.attr("data-href", href);
    like.attr("data-width",400);
    like.attr("data-layout","button_count");
    like.attr("data-show-faces","true");
    like.attr("data-font","arial");
    element.append(like);        
}
function addFBsend(href, element) {
    var like = $('<div class="fb-send"></div>');
    like.attr("data-href", href + "/" +element.children("img").attr("src"));
    element.append(like);        
}
function addFBcomment(href, element) {
    var like = $('<div class="fb-comments"></div>');
    like.attr("data-href", href);
    like.attr("data-width", 400);
    like.attr("data-num-posts", 2);
    element.append(like);        
}
$(document).ready(function() {
    addFBsdk();
    addFBlike("http://www.dayleycreations.com", $("#like"));
    addFBsend("http://www.dayleycreations.com", $(".navItem"));
    addFBcomment("http://www.dayleycreations.com", $("#content"));
    $(".navItem img").click(function() {
        $("#photo").attr("src", $(this).attr("src"));
    });
});