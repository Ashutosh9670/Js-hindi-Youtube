//There are two type of data type 
//primitive of 7 types
//number, string, boolean, undefined, null, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
//Reference datatype
//Array, object, function

const stud = ["Ashu","Lakshay","Vivek","Hritk","Akash"];

console.log(typeof stud)

const customer = {
    name: 'Ashu',
    age: 22
}

const myfunction = function(){
    console.log("hello world")
}

console.log(myfunction)

console.log(typeof customer)