const name = "Vaibhav";
const repo = 4;

// console.log("My name is " + name + " repo count is " + repo); // irrelevant nowadays;
// console.log(`The name is ${name} and the repo count is ${repo}`); // valid form of writing;

// different way of declaring String as;
const name1 = new String("Vigeelante") // as an object you did it , in the constructor you write the value;

// console.log(name1);
// console.log(name1[0]);
// console.log(name1[1]);

const newString = name1.substring(0 , 4)

// console.log(newString);
console.log(typeof (newString) === typeof (name1));
// console.log(newString === name1);
