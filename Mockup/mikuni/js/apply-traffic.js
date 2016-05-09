/**
 * Created by Ethan on 16/4/30.
 */
$(function () {
    $('.form_datetime').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        format: 'yyyy-mm-dd hh:ii:ss'
    });

    $("#btnSetApprovalUser").bind("click", function(){
        var $select = $("<select class='form-control'><option>审批者2:社长</option></select>");
        $("#btnSetApprovalUser").before($select);
    });
});
