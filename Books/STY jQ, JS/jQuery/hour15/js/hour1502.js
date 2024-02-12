function failure() { alert("Login Failed");}
function success() { alert("Login Succeeded");}
function always() { alert("Login Attempt Completed");}
function login() {
    $.get("php/login.php",
        $("loginForm").serialize()).done(success).fail(failure).always(always);
    return false;
}
$(document).ready(function() {
    $("#loginButton").click(login);
});