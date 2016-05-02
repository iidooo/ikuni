/**
 * Created by Ethan on 16/4/30.
 */
$(function () {
    $('.form_month').datetimepicker({
        weekStart: 1,
        todayBtn: 0,
        autoclose: 1,
        todayHighlight: 1,
        startView: 3,
        minView: 3,
        forceParse: 0,
        format: 'yyyy-mm-dd'
    });

    $("#schedule").load(clientURL + "/widgets/scheduler-meeting-detail.html");
});