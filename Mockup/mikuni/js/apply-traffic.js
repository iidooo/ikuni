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
        var $select = $("<select class='form-control'><option>部长</option><option>人事</option><option>财务</option></select>");
        $("#btnSetApprovalUser").before($select);
    });
});
