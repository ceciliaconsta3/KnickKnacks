"use strict";

function draw() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var rect = canvas.getContext("2d");

        // Sky
        rect.beginPath();
        rect.fillStyle = "lightblue";
        rect.fillRect(0, 0, 500, 275);

        // Clouds
        rect.beginPath();
        rect.fillStyle = "white";
        rect.arc(100, 100, 50, 0, Math.PI * 2, true);
        rect.arc(150, 110, 40, 0, Math.PI * 2, true);
        rect.arc(200, 110, 30, 0, Math.PI * 2, true);
        rect.fill();

        // Lawn
        rect.beginPath();
        rect.fillStyle = "#99ffcc";
        rect.fillRect(0, 275, 500, 170);

        // Sidewalk
        rect.beginPath();
        rect.fillStyle = "lightgray";
        rect.fillRect(0, 445, 500, 55);

        // Pavement Lines
        rect.strokeStyle = "white";
        rect.moveTo(50, 445);
        rect.lineTo(50, 475);
        rect.stroke();
        rect.moveTo(150, 445);
        rect.lineTo(150, 475);
        rect.stroke();
        rect.moveTo(250, 445);
        rect.lineTo(250, 475);
        rect.stroke();
        rect.moveTo(350, 445);
        rect.lineTo(350, 475);
        rect.stroke();
        rect.moveTo(450, 445);
        rect.lineTo(450, 475);
        rect.stroke();

        // House
        rect.beginPath();
        rect.fillStyle = "#ffff99";
        rect.fillRect(200, 250, 150, 150);

        // Roof
        rect.fillStyle = "#f4a460";
        rect.moveTo(165, 250);
        rect.lineTo(275, 155);
        rect.lineTo(375, 250);
        rect.fill();

        // Door
        rect.fillStyle = "white";
        rect.fillRect(255, 335, 45, 65);

        // Door handle
        rect.beginPath();
        rect.fillStyle = "lightgray";
        rect.arc(290, 365, 3, 0, Math.PI * 2, false);
        rect.fill();
    }
}
// Needed to display the canvas
window.onload = draw;