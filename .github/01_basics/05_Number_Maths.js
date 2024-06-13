const number = 100;

const balance = new Number(100000);

// console.log(balance.toFixed(2));
// console.log(balance.toString().length);
// console.log(balance.toPrecision(4)); // Before Decimal Value;
// console.log(balance.toLocaleString("en-IN")); // to represent 0's and en-IN represents in Indian Number System.

// Maths
// console.log(Math);
// console.log(Math.abs(-19999)); // abs means ABSOLUTE VALUE used to change the negative values.
// console.log(Math.round(10.4));
// console.log(Math.ceil(5.1)); // It chooses the top Value in this case will print 6
// console.log(Math.floor(6.9)); // it chooses the lowest value it will print 6;
// console.log(Math.min(4,2,1,3));
// console.log(Math.max(7,8,9,4));

// console.log(Math.random()); // it gives the value between 0 and 1;

// console.log((Math.random() * 10) + 1); // the value is coming still in decimal , with that we will use floor;

// console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // it will range in between 10 and 20

// floor func is used to get that without decimal;
// max - min is done to be in the range + 1 is done so that the min num will be greater;
// + min is done so that range should not be less (num with 9, 8, 7) should not fall;
