

var payRate = 17.30;
var hoursWorked = 45;
var overTimeRate = 1.5;
var regularHours = 40;
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
    pay =(regularHours * payRate) + (payRate * overTimeRate * (hoursWorked - regularHours));
}
console.log(pay);





