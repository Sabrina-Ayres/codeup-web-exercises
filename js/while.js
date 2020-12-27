"use strict";

var num = 2;
while (num <= 65536){
    console.log(num);
    num *= 2;
}

//////////////////////

var allCones = Math.floor(Math.random() * 50) + 50;
var conesLeft;
console.log("There are " + allCones + " cones to sell today.");

do {
    conesLeft = Math.floor(Math.random() * 5) + 1;
    if (conesLeft <= allCones) {
        console.log("Number of cones sold: " + conesLeft);
        allCones -= conesLeft;
    } else {
        console.log("I cannot sell you " + conesLeft + ". I only have " + allCones + " left...");
    }
    console.log(allCones + " are left...");
} while(allCones > 0);

console.log("YAY! I sold them all!");