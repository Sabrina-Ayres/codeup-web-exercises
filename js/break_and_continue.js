"use strict";

function isValid(input) {
    input = parseFloat(input);
    var isNum = !isNaN(input);
    var isOdd = input % 2 !== 0;
    var isInRange = input >= 1 && input <= 50;
    return isNum && isOdd && isInRange;
}

var userNumber;
while(true) {
    userNumber = prompt("Enter an odd number between 1 and 50...");
    if (isValid(userNumber)){
        break;
    }
}

console.log("Number to skip is: " + userNumber);

for (var i = 1; i <= 50; i++) {
    if (i == userNumber){
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    if (i %2 === 0){
        continue;
    }
    console.log("Here is an odd number: " + i);
}