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