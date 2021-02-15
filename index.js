$(".learn-more-button").on("mouseover", addAnim);

function toggleDiv() {
    if ($("#hidden-div").css("display") === "none") {
        $("#hidden-div").slideDown("slow", function() {
            $("#hidden-div").show();
        });
    } else {
        $("#hidden-div").slideUp("slow", function() {
            $("#hidden-div").hide();
        });
    };
};

function addAnim() {
    $(".learn-more-button").addClass("animated");
    $(".learn-more-button").off("mouseover", addAnim);
};