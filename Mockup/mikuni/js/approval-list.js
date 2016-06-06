/**
 * Created by Ethan on 16/4/30.
 */
$(function () {

    $("#tbodyApprovalList tr:even").click(function(){
        location.href = "approval-detail-0.html";
    });

    $("#tbodyApprovalList tr:odd").click(function(){
        location.href = "approval-detail-1.html";
    });

    console.log()
});