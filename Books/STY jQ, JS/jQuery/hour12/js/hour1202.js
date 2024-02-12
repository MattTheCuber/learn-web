$(document).ready(function() {
    $("img.normal").mouseover(function() {$(this).fadeTo(1000, 1);});
    $("img.normal").mouseout(function() {$(this).fadeTo(2000, .201);});
    $("#flash").mouseover(function() {$(this).fadeTo(100, 1);});
    $("#flash").mouseover(function() {$(this).fadeTo(100, .201);});
});