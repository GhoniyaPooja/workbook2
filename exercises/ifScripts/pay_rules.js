

var payRate = 17.30;
var hoursWorked = 45;
var pay;

// under 40 hourse
if (hoursWorked < 40)
 {
    pay = hoursWorked * payRate;
}

// exactly 40 hourse
else if (hoursWorked == 40) {
    pay = hoursWorked * payRate;
}


// over 40 hours
else {
    pay =(40 * payRate) + (payRate * 1.5 * (hoursWorked - 40));
}
console.log(pay);





