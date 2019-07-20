"use strict";

function addItem() {
    var val = $("input").val();
    if (val !== "") {
        var elem = $("<li></li>").text(val);
        $(elem).append("<button class='deleteItem'>X</button>");
        $("#mylist").append(elem);
        $("input").val("");
        $("input").focus();
        $(".deleteItem").on("click", function() {
            $(this).parent().remove();
        });
    }
}

$("h1").on("click", function() {
    $("input").fadeToggle(1000);
    $("button").fadeToggle(1000);

});

//on document. ready
$(function() {
    $("input").focus();
    $("#add").on("click", addItem);
    $("input").on("keydown", function(event) {
        if (event.which === 13) {
            addItem();
        }
    });

});