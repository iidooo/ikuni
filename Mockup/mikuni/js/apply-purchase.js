/**
 * Created by Ethan on 16/5/11.
 */
$(function () {
    $("#btnSetApprovalUser").bind("click", function(){
        var $select1 = $("<select class='form-control'><option>开发部</option><option>销售部</option><option>研发部</option></select>");
        var $select2 = $("<select class='form-control'><option>审批者2:社长</option></select>");
        $("#btnSetApprovalUser").before($select1);
        $("#btnSetApprovalUser").before($select2);
    });

    $("#btnAppend").bind("click", function(){
        $("#tblApply tr:last").clone(true).appendTo('#tblApply');
    });
});