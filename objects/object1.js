// Singleton
// Object.create()

// Object literal
const sim = Symbol("key1");

const myObj = {
    name : "Aditya",
    age : 20,
    [sim] : "My key 1",
    location : "pune",
    email : "adi1336@gamil.com",
    isLoggedIn : true,
    lastLoginDays : ["monday", "Saturday"]
}

// console.log(myObj.isLoggedIn);
// console.log(myObj["name"]);
// console.log(myObj[sim]);
// console.log(typeof myObj[sim]);

// myObj.age = 21;
// console.log[myObj.age];

// Object.freeze(myObj);
// myObj.age = 23;

// console.log(myObj)

myObj.greeting = function(){
    console.log("Hello there! Js user.");
}

myObj.greeting2 = function(){
    console.log(`Hi there js user ${this.name}`);
}

console.log(myObj.greeting);
console.log(myObj.greeting())
console.log(myObj.greeting2());