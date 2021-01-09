const circle = require('./circle.js');
const myCircle = circle(4)

// console.log(`지름이 4인 원의 면적: ${circle.area(4)}`)
// console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`)

console.log(`지름이 4인 원의 면적: ${myCircle.area(4)}`)
console.log(`지름이 4인 원의 둘레: ${myCircle.circumference(4)}`)