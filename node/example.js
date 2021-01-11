const fs = require('fs');

// 동기 방식
// const filenames = fs.readdirSync('.');
// for (let i = 0; i < filenames.length; i++) {
//     console.log(filenames[i]);
// }
// console.log('ready');
// console.log('can process next job...');

// 비동기 방식
fs.readdir('.', function (err, filenames) {
    for (let i = 0; i < filenames.length; i++) {
        console.log(filenames[i])
    }
    console.log('ready');
})
console.log('can process next job...')