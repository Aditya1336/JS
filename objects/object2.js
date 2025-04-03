// const obj1 = {
//     Id : "abc",
//     Fullname : {
//         Firstname : {
//             Nickname : "Adi1336",
//             Actualname : {
//             "Real Name" : "Aditya",
//             "Middle Name" : "Nitin"
//             }
//         },
//         Lastname : "Patil"
//     }
// }

// console.log(obj1);
// console.log(obj1.Fullname.Firstname)
// console.log(obj1.Fullname.Lastname)
// console.log(obj1.Fullname.Firstname?.Nickname)
// console.log(obj1.Fullname.Firstname?.Actualname)
// console.log(obj1.Fullname.Firstname?.Actualname["Real Name"])
// console.log(obj1.Fullname.Firstname?.Actualname["Middle Name"])

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {5:"e",6:"f"};

// const obj4 = {obj1,obj2,obj3};
// const obj4 = Object.assign({},obj1,obj2,obj3);
const obj4 = {...obj1,...obj2,...obj3};
console.log(obj4);