$(document).ready(function () {


    $(".field input").focus(function () {
        $(this).closest('.field').attr("class", "field focused label-top");
    });

    $(".field input").blur(function () {
        var $percentage = 0;
        $(".field input:not(:radio)").each(function () {
            if ($(this).is(':valid')) {
                $percentage += 25;
            }
        });

        if ($(".field input[name='contact_time']:checked").length > '0') {
            $percentage += 25;
        }
        $(".circle").attr("class", "circle progress" + $percentage);
        $(".percentage").text($percentage + "%");
        if ($percentage == 100) {
            setTimeout(function () {
                $(".circular-chart .check").attr("class", "check check-complete");
                $(".percentage").attr("class", "percentage hide_number");
            }, 500);
            setTimeout(function () {
                $(".circular-chart .check").attr("class", "check check-complete success");
            }, 1000);
        }

        if ($(this).is(':valid')) {

            $(this).closest('.row').find(".path").attr("class", "path path-animate");
            $(this).closest('.row').find(".fill").attr("class", "fill fill-animate");

            var that = $(this);

            setTimeout(function () {
                $(that).closest('.row').find(".check").attr("class", "check check-complete");
                $(that).closest('.row').find(".fill").attr("class", "fill fill-complete");
                $(that).closest('.row').find(".field_number").attr("class", "field_number hide_number");
            }, 2000);

            setTimeout(function () {
                $(that).closest('.field').attr("class", "field label-top");
                $(that).closest('.row').find(".check").attr("class", "check check-complete success");
                $(that).closest('.row').find(".fill").attr("class", "fill fill-complete success");
                $(that).closest('.row').find(".path").attr("class", "path path-complete");
            }, 3000);
        }
    });
});