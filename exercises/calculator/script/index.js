"use strict";


function add() {
    var numberOne = 20;
var numberTwo = 5;
var result = numberOne + numberTwo;
console.log(result);
    
}
// add();

function init() {
    var addButton = document.getElementById("addButton")
    addButton.onclick = add;
}

// init();

window.onload = init;


