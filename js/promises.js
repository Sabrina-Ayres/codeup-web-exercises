
function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve('The number of delayed milliseconds is ' + num);
            } else {
                reject('That didn\'t work out!');
            }
        }, num);
    });
}

wait(5000).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})