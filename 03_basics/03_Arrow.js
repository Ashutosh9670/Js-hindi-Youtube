const user = {
    username :"Ashutosh",
    emailID : "ashut987@gmail.com",

    welcomeMessage : function(){
        
        console.log(`Welecome ${this.username} in our website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Ashu"
// user.welcomeMessage()

// console.log(this);

//basic syntax of Arroww () => {}
//Note:- we also store Arrow function in some variable

// const addTwoNumber = (num1, num2) => {

//     return num1+num2;
// }

// We can also write like this

//  const addTwoNum = (num1, num2) => num1 + num2

//we can not return object like this given below
        
//  const addTwoNum = (num1, num2) => {username: "Ashutosh"}


// if we want to write object we should to write like this 

const addTwoNum = (num1, num2) => ({username: "Ashutosh"})





console.log(addTwoNum(3,4))

