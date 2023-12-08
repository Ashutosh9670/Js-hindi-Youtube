//Dates

let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate) // mydate is a object type

//  let CreateDate = new Date(2023, 0, 8)
// let CreateDate = new Date(2023, 0, 8, 3, 5)
// let CreateDate = new Date("2023-01-14")
let CreateDate = new Date("12-08-2023")
// console.log(CreateDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000))
//console.log(CreateDate.getTime())

let date = new Date()
console.log(date.getMonth() + 1)
console.log(date.getFullYear())
console.log(date.getTime().toLocaleString())
