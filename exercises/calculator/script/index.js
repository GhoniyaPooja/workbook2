"use strict";

function init(){
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractionBtn");
const multipltBtn = document.getElementById("multipltBtn");
const divideBtn = document.getElementById("divideBtn");
addBtn.onclick = addCalculation;
}

window.onload = init;

function addCalculation(){
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("numbe21");
    let result = Number(number1.value) + Number(number2);
    let answerInput = document.getElementById("answerInput");

    answerInput.value = answer;
}