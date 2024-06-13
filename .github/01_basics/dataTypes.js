/*
    Primitive Datatypes

    1.Number
    2.String
    3.Boolean
    4.Null
    5.Undefined
    6.Symbol -> used to define unique
    7.BigInt


    Reference Types/ Non-Primitive DataTypes

    1.Arrays
    2.Objects
    3.Functions
*/

// use of symbol dataType

let id = Symbol("1234")
let uid = Symbol("0987")

console.log(typeof id);
console.log(typeof uid);
console.log(id === uid);

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
