const instaUser = {}

instaUser.id = "1234poo"
instaUser.name = "Ashutosh Singh"
instaUser.emailId = "Ashu897@google.com"
instaUser.isLoggedIn = false

// console.log(instaUser)

const regularUser = {

    userName:{
        UserFullName:{
            FirstName:"Ashutosh",
            LastName:"Singh"
        }
    }
}

// console.log(regularUser.userName.UserFullName.FirstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} // most of the we are using this to concatenat between objects

//  console.log(obj3);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));






