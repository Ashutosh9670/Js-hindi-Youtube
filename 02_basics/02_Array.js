const marvel_heros = ["Thor","Captain America","IronMan"]
const Dc_heros = ["Superman","Batman","flash"]
//marvel_heros.push(Dc_heros)
const bth_heros = marvel_heros.concat(Dc_heros)
console.log(bth_heros) // but generally we are not using this method instead of this we are using spread the reason is simple when we use concat we can concat ony two arrays but when we use spread we can merge many arrays as many we want t...

const all_heros = [...marvel_heros, ...Dc_heros]
console.log(all_heros) 

const newArr = [1, 2, 3, [1, 3, 4,[1, 2, 3,4], 4], 5]
console.log(newArr.flat(2))

console.log(Array.isArray("Ashutosh"))
console.log(Array.from("Ashutosh"))
console.log(Array.from({name:"Ashutosh"})) //here we have to also define from which reference i want array eg: through key values or pair values

let score1 = 400
let score2 = 300
let score3 = 200
let score4 = 100

console.log(Array.of(score1, score2, score3, score4))
