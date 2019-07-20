// HTML5 Drag N' Drop API
"use strict";

function allowDrop(ev) {
    ev.preventDefault();
}
// dataTransfer provides support for multiple items
// using setData to drag the first one.
// The format has to be in "text" in order for this to work
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}

// Additional items after the drop
document.addEventListener("drop", function() {
    changeText();
    displayReset();
});

function changeText() {
    $("#cond-text").text("Nice Job!");
    $("#cond-text").addClass("niceJob");
}

function displayReset() {
    $("#reset-btn").css("display", "block");
}

$("#reset-btn").click(function() {
    location.reload(true);
});