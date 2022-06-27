// FOR IN

// let spacecraft = {
//   size: "Big",
//   range: "Vast",
//   model: "Smart",
//   capacity: "Lots",
// };
// console.log(spacecraft.range);
// let i = "Key";
// let j = "Value";
// for (let i in spacecraft) {
//   console.log(spacecraft[i]);
//   for (let j in spacecraft) {
//     console.log(spacecraft[j]);
//   }
// }

// MY ANSWER:
let spacecraft = {
  size: "Big",

  range: "Vast",

  model: "Smart",

  capacity: "Lots",
};



for (const key in spaceCraft) {
  console.log(key + " " + spaceCraft[key]);
}

for (let key in spacecraft) {
  console.log(`This is the key ${key}`);

  console.log(`This is the value ${spacecraft[key]}`);
}

// LET while...
let x = 0; while (x < 3){​​​​​​ alert( `number ${​​​​​​x}​​​​​​!` ); x++ }​​​​​​

Variables ppt
Exercise 6:

function calculator(num1,num2,operator){​​​​​​ if(operator === '-') return num1 - num2 else if(operator === '+') return num1 + num2 else if(operator === '*') return num1 * num2 }​​​​​​ console.log(calculator(10, 20, '-'));

Exercise 7:
function min(a,b) {​​​​​​ return Math.min(a,b); }​​​​​​ console.log(min(1, 7)); console.log(min(10, 100));

Exercise 8:

