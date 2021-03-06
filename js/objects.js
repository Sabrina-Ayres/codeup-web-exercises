(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Sabrina",
        lastName: "Ayres",
        sayHello: function() {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    },};

    console.log(person.sayHello());


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var total = shoppers.amount;

    function displayCurrency(amount){
        return "$" + amount.toFixed(2);
    }

    function discount(total){
        if (total > 200) {
            return total - (total * .12);
        } else {
            return total;
        }
    }

    for (var i = 0; i < shoppers.length; i += 1){
        console.log(shoppers[i].name + "'s original total was " + displayCurrency(shoppers[i].amount) + ", his new total is " +
            displayCurrency(discount(shoppers[i].amount)) + ".");
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: "Troubled Blood",
            author: {
                firstName: "Robert",
                lastName: "Galbraith",
            }
        },
        {
            title: "The Girl With The Dragon Tattoo",
            author: {
                firstName: "Stieg",
                lastName: "Larsson",
            }
        },
        {
            title: "Educated",
            author: {
                firstName: "Tara",
                lastName: "Westover",
            }
        },
        {
            title: "The Invisible Life of Addie LaRue",
            author: {
                firstName: "V. E.",
                lastName: "Schwab",
            }
        },
        {
            title: "Anxious People",
            author: {
                firstName: "Fredrik",
                lastName: "Backman",
            }
        },
    ]

    //console.log(books[0].author.firstName);
    //console.log(books[3].author.firstName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (var i = 0; i < books.length; i += 1){
        console.log(books[i]);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

var createBook = function(bookTitle, authorFirst, authorLast) {
    var book = {}
    book.title = bookTitle;
    book.author = {}
    book.author.firstName = authorFirst;
    book.author.lastName = authorLast;
    return book
}

var showBookInfo = function (book) {
    console.log("Book Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
}


books.push(createBook("Untamed", "Glennon", "Doyle"));
books.forEach(showBookInfo);


})();








//////////////

// - Mini Exercise 3
// Create a dog object...
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     canBreed (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log “Woof!”
//     getOlder() - will increase age by 1
// disableBreeding() - will set canBreed to false
// vaccinate(nameOfVaccination) - takes in an argument for the
// name of the vaccination and adds a new shot with the current date to the shotRecords array

//
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
//
// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
//
//
// var dog = {
//     breed: "Corgi",
//     weightInPounds: 45,
//     age: 2,
//     color: "Brown",
//     canBreed: true,
//     shotRecords: [
//         {
//             typeOfShot: "Rabies",
//             dateOfShot: "12/1/2020",
//         },
//         {
//             typeOfShot: "Parvo",
//             dateOfShot: "12/20/2020",
//         },
//         {
//             typeOfShot: "Canine distemper",
//             dateOfShot: "12/20/2020",
//         },
//     ],
//     bark: function() {
//         console.log("Woof!");
//     },
//     getOlder: function() {
//         this.age += 1;
//     },
//     disableBreeding: function() {
//         this.canBreed = false;
//     },
//     vaccinate: function(nameOfVaccination) {
//         var newShot = {
//             typeOfShot: nameOfVaccination,
//             dateOfShot: today,
//         };
//         dog.shotRecords.push(newShot);
//     },
// }
//
//


//////////////
// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];
//
// // 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
// // 2. Change the names of all users to "John Doe"
// // 3. Increase the current age of all users by 1
// //
// // Can you accomplish each step using iteration?
//
// console.log(users[0].givenName, users[1].givenName, users[2].givenName);
//
//
// users.forEach(function(user){
//     user.givenName = "John Doe";
// });
//
// console.log(users);
//
// users.forEach(function(user){
//     console.log(user.age + 1);
// })
//


// /////////


// var bev1 = {
//     brandName: "Dr. Pepper",
//     type: "soda",
//     volumeInLiters: 1,
//     priceInCents: 400,
//     expirationDate: "Jan 1, 2022",
//     datesOfPreviousSips: ["Dec 12, 2020", "Dec 18, 2020", "Dec 23, 2020"],
//     isOpen: True,
// }
//
// var bev2 = {
//     brandName: "Pepsi",
//     type: "soda",
//     volumeInLiters: 2,
//     priceInCents: 600,
//     expirationDate: "Feb 1, 2022",
//     datesOfPreviousSips: ["Dec 20, 2020", "Jan 1, 2021", "Jan 3, 2021"],
//     isOpen: False,
// }
//
// var bev3 = {};
//
//     bev3.brandName = "Pepsi";
//     bev3.type = "soda";
//     bev3.volumeInLiters = 2;
//     bev3.priceInCents = 600;
//     bev3.expirationDate = "Feb 1, 2022";
//     bev3.datesOfPreviousSips = ["Dec 20, 2020", "Jan 1, 2021", "Jan 3, 2021"];
//     bev3.isOpen = False;
















