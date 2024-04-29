"use strict";

// init();

window.onload = init;



function init() {
    const addButton = document.getElementById("addButton");
    addButton.onclick = add;
    var sunButton = document.getElementById("sunButton");
    sunButton.onclick = sub;
    var mulButton = document.getElementById("mulButton");
    mulButton.onclick = mul;
    var divButton = document.getElementById("divButton");
    divButton.onclick = div;
}


function add() {
var numberOneInput =parseInt(document.getElementById("numberOneInput").value);
var numberTwoInput = parseInt(document.getElementById("numberTwoInput").value);
var result = numberOneInput + numberTwoInput;
document.getElementById("answer").value = result;

    
}
// ...........SUB............



function sub() {
    var numberOneInput =parseInt(document.getElementById("numberOneInput").value);
    var numberTwoInput = parseInt(document.getElementById("numberTwoInput").value);
    var result = numberOneInput - numberTwoInput;
    document.getElementById("answer").value = result;
    
        
    }


    // .......MULTIPLY.........

    
    function mul() {
        var numberOneInput =parseInt(document.getElementById("numberOneInput").value);
        var numberTwoInput = parseInt(document.getElementById("numberTwoInput").value);
        var result = numberOneInput * numberTwoInput;
        document.getElementById("answer").value = result;
        
            
        }
    

      
        
        function div() {
            var numberOneInput =parseInt(document.getElementById("numberOneInput").value);
            var numberTwoInput = parseInt(document.getElementById("numberTwoInput").value);
            var result = numberOneInput / numberTwoInput;
            document.getElementById("answer").value = result;
            var message = document.getElementById("message");
            let numberOne = Number(numberOneInput.value);
            let numberTwo = Number(numberTwoInput.value);
            if (isNaN(numberTwoInput)) {
                message.innerHTML = "NAN";
            }
        
            }
        

            