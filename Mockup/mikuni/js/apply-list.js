/**
 * Created by Ethan on 16/4/30.
 */
$(function () {
    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: 'yyyy-mm-dd'
    });

    $("#tbodyApplyList tr").click(function(){
        console.log(1);
        location.href = "apply-trip-detail.html";
    });
});