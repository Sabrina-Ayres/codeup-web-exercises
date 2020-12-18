// console.log("Hello from external Javascript");

// alert("Welcome to my Website!");

// var color = "";
// while (color === "") {
   // color = prompt("What's your favorite color?")
// }
// ;
// alert("I love the color " + color + " too!");

// var littleMermaid = "";
// while (littleMermaid === "") {
  //  littleMermaid = prompt("How many days did you rent The Little Mermaid?")
// }
// ;

// var brotherBear = "";
// while (brotherBear === "") {
 //   brotherBear = prompt("How many days did you rent Brother Bear?")
// }
// ;

// var hercules = "";
// while (hercules === "") {
  //  hercules = prompt("How many days did you rent Hercules?")
// }
// ;

// var costOfMoviePerDay = 3

// var yourTotalForMoviesRented = (
  //  (littleMermaid * costOfMoviePerDay) + (brotherBear * costOfMoviePerDay) +
  //  (hercules * costOfMoviePerDay)
// );

// alert("Your grand total is " + yourTotalForMoviesRented);

//var googleRatePerHour = 400;
// var amazonRatePerHour = 380;
// var facebookRatePerHour = 350;
// var googleHours = prompt("How many hours did you work at Google this week?");
// var amazonHours = prompt("How many hours did you work at Amazon this week?");
// var facebookHours = prompt("How many hours did you work at Facebook this week?");
// var totalHours = googleHours * googleRatePerHour + amazonHours * amazonRatePerHour + facebookHours *
  //  facebookRatePerHour;

// alert("This week you have earned $" + totalHours + "!");


// var isTheClassFull = confirm("Does the class still have empty seats?");
// var isThereAConflictInSchedule = confirm("Is your schedule clear at the time of this class?");
// var canYourEnrollInThisClass = alert("You can enroll: " + (isTheClassFull && isThereAConflictInSchedule));

// var moreThanTwoItems = confirm("Did you buy more than two items?");
// var pastExpiration = confirm("Is the offer still valid?");
// var areYouAMember = confirm("Are you a Premium member?");
// var productOfferApplied = confirm("You can use the offer: " +
  //  (moreThanTwoItems && pastExpiration) || (areYouAMember && pastExpiration));


function isShortWord(string){
    return string.length < 5;
}


function isSameLength(string1, string2){
    return string1.length === string2.length;
}

function getSmallerSegment(string, number){
    var shortened = (string.substring(0, number))
    var output = shortened.toLowerCase()
    return output;
}
























