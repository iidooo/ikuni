/**
 * Created by Ethan on 16/5/2.
 */
$(function () {
    $('.form_time').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0,
        format: 'hh:ii'
    });

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

    $("#selRepeatMode").bind("change", function () {
        var index = $("#selRepeatMode").val();

        switch (index) {
            case "1":
                $("#repeatDailyOption").attr("class","show");
                $("#repeatWeeklyOption").attr("class","hidden");
                $("#repeatMonthlyOption").attr("class","hidden");
                break;
            case  "2":
                $("#repeatDailyOption").attr("class","show");
                $("#repeatWeeklyOption").attr("class","show");
                $("#repeatMonthlyOption").attr("class","hidden");
                break;
            case "3":
                $("#repeatDailyOption").attr("class","show");
                $("#repeatWeeklyOption").attr("class","hidden");
                $("#repeatMonthlyOption").attr("class","show");
                break;
            default :
                $("#repeatDailyOption").attr("class","hidden");
                $("#repeatWeeklyOption").attr("class","hidden");
                $("#repeatMonthlyOption").attr("class","hidden");
                break;
        }
    });
});