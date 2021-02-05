// var x = document.getElementById("hidden-div");

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