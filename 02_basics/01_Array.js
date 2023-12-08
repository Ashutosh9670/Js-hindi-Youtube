//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[6])
//Array always make shallow copy
//Shallow copy means it refers to reference of Array it mean when we are changing in array it will reflect in original array also 
//DeepCopy means it create a copy of array and if it create copy of array so it does not reflect in original array 

// myArr.push(6) 
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) // What it does it place 9 from the front although its not optimized approach
myArr.shift()
console.log(myArr.includes(9)) //here includes check whether this element present in myArr or not

console.log(myArr.indexOf(10))
const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr) // here it simply change it into string data type 

// Slice and Splice

console.log(myArr.slice(1,3))
console.log("A", myArr)


//Splice 

console.log(myArr.splice(1,3))
console.log("B", myArr) // Splie is simply remove element from there and manipulate array 
