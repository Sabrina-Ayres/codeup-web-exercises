"use strict";

var oddNumber = prompt("Enter an odd number between 1 and 50...");

for (var i = 1; i < 50; i++) {

    if (oddNumber % 2 !== 0) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}