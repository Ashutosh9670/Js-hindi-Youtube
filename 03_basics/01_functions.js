// function saymyName(){
//     console.log('A')
// console.log('S')
// console.log('H')
// console.log('U')
// console.log('T')
// // console.log('O')
// console.log('S')
// console.log('H')
// }

// saymyName()


function addTwoNumber(number1, number2){
      
    console.log(number1+number2);
    // let ad = number1+number2
    // return ad


}

// const add = addTwoNumber(3, null)
// console.log("Addition of two number:", add);

function loggedUser(username){

    if(username === undefined){
        return `please use username`
    }
   return `${username} just logged in `
}

const logged = loggedUser()
console.log(logged)