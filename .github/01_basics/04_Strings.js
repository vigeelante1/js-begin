const name = "Vaibhav";
const repo = 4;

// console.log("My name is " + name + " repo count is " + repo); // irrelevant nowadays;
// console.log(`The name is ${name} and the repo count is ${repo}`); // valid form of writing;

// different way of declaring String as;
const name1 = new String("Vigeelante-is-a-good-man") // as an object you did it , in the constructor you write the value;

// console.log(name1);
// console.log(name1[0]);
// console.log(name1[1]);

const newString = name1.substring(0 , 4)

// console.log(newString);
// console.log(typeof (newString) === typeof (name1));
// console.log(newString === name1);

const newString1 = "    vaibhavJi " 

// console.log(newString1);
// console.log(newString1.trim()); // with the help of trim , all the extra spaces have been removed.

const url = "https://vaibhav.com/vaibhav%20sharma"

const newURL = url.replace("%20" , "-")
// console.log(newURL);
// console.log(url.replace("%20" , "-")); it replaces the given value to the original value

// console.log(url);

// console.log(url.includes("vaibhav")); it return true or false in case whether it includes the input given or NOT;

console.log(name1.split("-"));
