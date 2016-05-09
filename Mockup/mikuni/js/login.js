/**
 * Created by Ethan on 16/5/4.
 */
$(function () {
    $("#btnLogin").bind("click", function () {
        var loginUserType = $("#userType").val();
        $.cookie("userType", loginUserType);
        window.location.href = "order-meeting.html";
    });
});