const prompt = require("prompt-sync")();
let year = prompt('enter the year to check if its leap year or not');
if(((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
console.log("its a leap year");
else
console.log("its not a leap year");