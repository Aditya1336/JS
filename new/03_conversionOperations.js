let a = "33"
let b = "33a"

console.table([typeof a,typeof b])

let c = Number(a)
let d = Number(b)

console.log(c)
console.log(typeof c)
console.log(d)
console.log(typeof d)

// "33" => 33
// "33a" => NaN
// true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
let boolString = Boolean(b)

// 1 => true, 0 => false
// "" => false
// "xyz" => true
console.log(isLoggedIn)
console.log(boolString)
