function addTwitter() {
  if ( $("#twitter-wjs").length == 0 ) {
    var twitter = $("<script></script");
    twitter.attr("id", "twitter-wjs");
    twitter.attr("src", "https://platform.twitter.com/widgets.js");
    $("head").append(twitter);
  }
}
function addTweet() {
  var tweet = $('<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>');
  tweet.attr("data-url", "http://dayleycreations.com");
  tweet.attr("data-via", "bwdayley");
  tweet.attr("data-related", "bwdayley:Dayley Creations");
  tweet.attr("data-lang", "en");
  $("#tweet").append(tweet);
}
$(document).ready(function() {
  addTwitter();
  addTweet();
});