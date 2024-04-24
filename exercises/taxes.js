"use strict";

var salary = 10000;
var tax = 23;
var taxAmount = salary*tax/100;
var finalSalary =  salary - taxAmount;
console.log(taxAmount);
console.log(finalSalary.toFixed(2));