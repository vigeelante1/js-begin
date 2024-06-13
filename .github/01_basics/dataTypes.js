/*
    Primitive Datatypes

    1.Number
    2.String
    3.Boolean
    4.Null
    5.Undefined
    6.Symbol -> u.+sed to define unique
    7.BigInt


    Reference Types/ Non-Primitive DataTypes

    1.Arrays
    2.Objects
    3.Functions
*/

// use of symbol dataType

let id = Symbol("1234")
let uid = Symbol("0987")

// console.log(typeof id);
// console.log(typeof uid);
// console.log(id === uid);

// use of arrays in JS

let array1 = ["vaibhav" , "vigeelante" , "vaibhaww" , true]

// use of objects in JS
// use of key value pairs. just like JSON.

 let object1 = {

    name: "vaibhaww",
    age: 21,
    typeOfMale: "Gentleman"
}

//definition of function;


function thisIsMyFunction(){


    console.log("Hello World , hahaha.");
}


// console.log(typeof (array1));
// console.log(array1);

// Stack is used in Primitive Data Type (makes a copy of a variable)
// Heap memory is used in Non-Primitive DataType (makes a reference of that variable , points it); 
// Note-: Any changes made into that variable will result permanent (Heap)
// Note-: "                                  " will have no change as it was a copy not an original value; 

let user1 = {

    userId: "vaibhav@google.com",
    upiId: "vaibhav@yabl"
}


let user2 = user1;

user2.userId = "vigeelante1";

console.log(user2);
console.log(user1);

