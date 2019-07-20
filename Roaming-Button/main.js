// Randomized items
'use strict';

var colors = ["red", "blue", "green", "yellow", "teal", "purple", "pink"];
var spots = [0, 200, 700, 40, 900, 60, 70, 350, 90, 500];

function changeColor() {
    var randomColor = colors[Math.floor(Math.random() * 7)];
    $("#exclusive").css({
        "background-color": randomColor
    });
    var randomSpot = spots[Math.floor(Math.random() * 10)];
    $("#exclusive").css({
        "top": randomSpot,
        "left": randomSpot
    });
}

function caught() {
    alert("You got me, nice job!");
}