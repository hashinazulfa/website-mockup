$(".navbar-toggler").click(function() {
    if ($(".navbar-dropdown").css("display") === "none") {
        if ($(".no-bg").length > 0) {
            $(".no-bg").addClass("bg-light");
        };
        $(".navbar-dropdown").slideDown(400, function() {
            $(".navbar-dropdown").show();
        });
    } else {
        $(".navbar-dropdown").slideUp(400, function() {
            $(".navbar-dropdown").hide();
            if ($(".no-bg").length > 0) {
                $(".no-bg").removeClass("bg-light");
            };
        });
    };
});

function toggleDiv() {
    if ($("#hidden-div").css("display") === "none") {
        $(".learn-more-button").addClass("slide-up");
        $(".wrapper").addClass("slide-down");
        $(".hidden-bg").fadeIn("fast", function() {
            $(".hidden-bg").show();
            $("#hidden-div").fadeIn("fast", function() {
                $("#hidden-div").show();
            });
        });
    } else {
        $(".learn-more-button").removeClass("slide-up");
        $(".wrapper").removeClass("slide-down");
        $(".hidden-bg").fadeOut("fast", function() {
            $(".hidden-bg").hide();
            $("#hidden-div").fadeOut("fast", function() {
                $("#hidden-div").hide();
            });
        });
    };
};