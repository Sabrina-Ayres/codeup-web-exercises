const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let threeLang = users.filter(function(l) {
    return l.languages.length >= 3;
});

// console.log(threeLang);


let userEmail = users.map(function(e) {
    return e.email;
})

// console.log(userEmail);


let exYear = users.reduce(function(total, year) {
    let sum = total + year.yearsOfExperience;
    return sum;
}, 0);

let userAvg = exYear / users.length;

// console.log(userAvg);
// console.log(exYear);


let longest = userEmail.reduce(function(a, b) {
    return a.length > b.length ? a : b;
}, '');

console.log(longest);

let listNames = users.reduce(function(total, name) {
    return total + " " + name.name;
}, " ");

console.log(listNames);