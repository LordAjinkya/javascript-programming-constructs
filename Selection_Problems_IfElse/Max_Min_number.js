let num1 = Math.floor(Math.random()*900)+100;
console.log("num1 = "+num1);
let num2 = Math.floor(Math.random()*900)+100;
console.log("num2 = "+num2);
let num3 = Math.floor(Math.random()*900)+100;
console.log("num3 = "+num3);
let num4 = Math.floor(Math.random()*900)+100;
console.log("num4 = "+num4);
let num5 = Math.floor(Math.random()*900)+100;
console.log("num5 = "+num5);

if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
console.log(num1 +" is maximum");
if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5)
console.log(num2 +" is maximum");
if(num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5)
console.log(num3 +" is maximum");
if(num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5)
console.log(num4 +" is maximum");
if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
console.log(num4 +" is maximum");
if(num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1)
console.log(num5 +" is maximum");