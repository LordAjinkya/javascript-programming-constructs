const prompt = require('prompt-sync')();
let choice = prompt('enter 1 to 4 for unit conversion:-');
choice = Number(choice);
switch(choice)
{
    case 1:
        let feet = prompt("enter the number to change from feet to inch")
        let feetToInch = feet * 12;
        console.log(feet+" feet equals to "+feetToInch+" inch");
        break;
    case 2:
        let Feet = prompt("enter the number to change from feet to meter");
        let feetToMeter = Feet / 3.281;
        console.log(Feet+" feet equals to "+feetToMeter+" meter");
        break;
    case 3:
        let Inch = prompt("enter the number to change from inch to feet");
        let inchToFeet = Inch/12;
        console.log(Inch+" inch is equal to "+inchToFeet+" feet");
        break;
    case 4:
        let meter = prompt("enter the number to change from meter to feet");
        let meterToFeet = meter * 3.281;
        console.log(meter+" meter is equal to "+meterToFeet+" feet");
        break;
    default:
        console.log("!Invalid Input");
        break;
}