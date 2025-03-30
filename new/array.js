// const marvel = ["Iron man", "Spider-Man", "Cap"];
// const dc = ["Batman", "Super Man", "Flash"];

// // marvel.push(dc);

// // console.log(marvel);

// // const all_heroes = marvel.concat(dc);
// // console.log(all_heroes);

// const all_heroes = [...marvel,...dc];
// console.log(all_heroes)

let a_array = [1,2,3,[4,5],4,6,[7,8,[9,10,[11]]]];
let b_array = a_array.flat(2);
console.log(b_array);

console.log(Array.isArray("Aditya"))
console.log(Array.isArray(a_array));

console.log(Array.from(897));
console.log(Array.from("Aditya"));

const a = 10;
const b = 20;
const c = 30;

console.log(Array.of(a,b,c));