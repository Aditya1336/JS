// function sayMyName(){
//     console.log('A');
//     console.log('D');
//     console.log('I');
//     console.log('T');
//     console.log('Y');
//     console.log('A');
// }

// sayMyName();
// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// function addTwoNumbers(num1,num2){
//     return num1+num2;
// }

// const res = addTwoNumbers("abc",null);
// console.log(res)

// function loginUserMessage(username){
//     if(username !== undefined)
//     {
//         return `${username} just logged in! `;
//     }
//     else
//     {
//         console.log("Please return a username");
//         return;
//     }
    
// }

// console.log(loginUserMessage());

// function cartValue(...num1)
// {
//     return num1;
// }

// console.log(cartValue(25,30,499));

const user = {
    username:"Aditya",
    "roll no":42
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and roll number is ${anyobject["roll no"]}`);
}

handleObject(user);