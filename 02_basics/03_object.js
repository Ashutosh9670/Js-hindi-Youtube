//object.create <-- when we are creating object like this then our singleton create


//object literals

const mySmb = Symbol("key1")
const newUser = {name: "Ashutosh Singh",
age : 22,
location: "Banaras",
"email": "ashutosh@google.com",
[mySmb]: "key1",
isloggedIn: false,
lastLoginDays: ["Monday","saturday"]
}

// console.log(newUser.email)
// console.log(newUser["email"])
// console.log(newUser[mySmb])
// console.log(typeof newUser[mySmb])

// newUser.email = "ashu789@gmail.com"
// console.log(newUser.email)
// Object.freeze(newUser)
// newUser.email = "ashu567@gmail.com"
// console.log(newUser.email)

console.log(newUser)

 newUser.greeting = function(){
    console.log("hello World")
}

newUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`)
}

console.log(newUser.greeting())
console.log(newUser.greetingTwo())