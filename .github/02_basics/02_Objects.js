// object creation;

// Object.create()

const mySym = Symbol("Key1")

const jsUser = {

    name: "vaibhav",
    "full name": "Vaibhav Sharma",
    [mySym]: "Key is here",
    age: 21,
    location: "FDB",
    email: "vaibhav@hotmail.com",
    isLoggedIn: true,
    lastLogInDays: ["Saturday" , "Sunday"]
}

// way 1 of accessing the object;
// console.log(jsUser.isLoggedIn);

// console.log(jsUser["name"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser); // cannot change or Override the object now;
jsUser.isLoggedIn = false;

// console.log(jsUser);

jsUser.greetings = function(){

    console.log("Hello User");
}

console.log(jsUser.greetings());