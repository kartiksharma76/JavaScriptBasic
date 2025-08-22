const marvel_heroes=["thor","Ironman", "spiderman"]
const dc_heroes = ["superman","flash","batman"]
marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_number= anotherArray.flat(Infinity)
console.log(real_another_number);



console.log(Array.isArray("Kartik"))
console.log(Array.from("Kartik"));
console.log(Array.from({name:"Kartik"}))// intersting
let score1=100
let score2=200
let score3 =300
console.log(Array.of(score1 ,score2,score3));
