$(document).ready(function () {
    var rest = 5;
    var work = 25;
    var hDisplay;
    var mDisplay;
    var sDisplay;

    var x;
    var resumeCount;
    var count;
    var timer;
    $("#work").hide();
    $("#break").hide();
    $("#reset").hide();

    $("#breakMinus").click(function () {
        if (rest > 1) {
            rest -= 1;
            clearInterval(timer);
            $("#breakTime").text(rest);
            $("#start").show();
            $("#reset").hide();

        }
    });
    $("#breakPlus").click(function () {
        clearInterval(timer);
        rest += 1;
        $("#breakTime").text(rest);
        $("#start").show();
        $("#reset").hide();



    });
    $("#workMinus").click(function () {
        if (work > 1) {
            work -= 1;
            clearInterval(timer);
            $("#workTime").text(work);
            $("#start").show();
            $("#reset").hide();
        }
    });
    $("#workPlus").click(function () {

        work += 1;
        clearInterval(timer);
        $("#workTime").text(work);
        $("#start").show();
        $("#reset").hide();
    });



    $("#start").click(function () {
        $("#start").hide();
        $("#reset").show();
        $("#work").show();
        x = work * 60;
        $('#group').css('border-color', 'lawngreen');
        resumeCount = x;
        totalTimer();


    });


    function timeFormat(d) {
        var d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        hDisplay = (h > 0) ? (h < 10) ? ("0" + h + ":") : h + ":" : "";
        mDisplay = (m < 10) ? ("0" + m + ":") : m + ":";
        sDisplay = (s < 10) ? ("0" + s) : s;
    }


    function countDown() {
        count -= 1;
        resumeCount = count;
        timeFormat(count);
        $("#display").text(hDisplay + mDisplay + sDisplay);

        if (count === 0) {

            if ($("#break").is(":visible")) {
                clearInterval(timer);
            } else {

                $("#display").text("Break Time");
                $("#work").hide();
                $("#break").show();
                $('#group').css('border-color', 'orangered');
                clearInterval(timer);

                var y = $("#breakTime").text();
                resumeCount = y * 60;
                totalTimer();

            }
        }
    }


    function totalTimer() {
        count = resumeCount;
        timer = setInterval(countDown, 1000);
        console.log(timer);

    }

    $("#reset").click(function () {

        clearInterval(timer);
        $("#reset").hide();
        $("#start").show();
        $("#display").text("00:00");
        $("#breakTime").text("5");
        $("#workTime").text("25");
        $("#work").hide();
        $("#break").hide();
        $('#group').css('border-color', 'white');

        rest = 5;
        work = 25;
    });

});