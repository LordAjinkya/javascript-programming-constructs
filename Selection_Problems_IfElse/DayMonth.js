const prompt = require('prompt-sync')();

let month = prompt('enter the month number');
let date = prompt('enter date');
if(month == 3 && date <= 20 && date <= 31){
    console.log("True");
}    
else if((month == 4 || month == 5) && (date <= 30 && date != 0)){
    console.log("True");
}
else if(month == 6 && date <= 20){
    console.log("True");
}
else
    console.log("false");