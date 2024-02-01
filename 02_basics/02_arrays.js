const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heroes.push(dc)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const all_heroes = marvel_heroes.concat(dc)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc]
console.log(all_new_heroes);

const another_array = [1,3,2,[3,5],5,7,[4,8,9,[1,8,0,[1,[7],6,7]],4,8]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ankur"))
console.log(Array.from("Ankur"))
console.log(Array.from({name : "Ankur"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

