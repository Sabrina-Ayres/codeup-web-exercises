"use strict";


function showMultiplicationTable(num){
 for (var i = 0; i <=10; i++) {
     var result = num * i;
     console.log(num + " x " + i + " = " + result);
 }
}

/////////////////////////////////

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < 10; i++) {
    var x = randomNum(20, 200);
    if (x % 2 === 0) {
        console.log(x + " is even ");
    } else {
        console.log(x + " is odd ");
    }
}

///////////////////////////////////

for (var i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i));
}

//////////////////////////////////

for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}

////////////////////////////////

