$(document).ready(function () {
    $("#accordion").accordion();
})

$(function () {
    $("#dialog").dialog({
        autoOpen: false
    });
    $("#dialogButton").click(function () {
        $("#dialog").dialog("open");
    });
});

// Seach

$(function () {
    var autoComplete = [
        "Html5",
        "Asp",
        "C",
        "C++",
        "Css3",
        "JavaScript",
        "Jquery"
    ];

    $("#tags").autocomplete({
        source: autoComplete
    });
});