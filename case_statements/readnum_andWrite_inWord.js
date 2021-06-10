const prompt=require('prompt-sync')();
let digit=prompt("Enter the number:-");
digit=Number(digit);
switch(digit)
{
    case 1:
        console.log("one")
        break;
    case 10:
        console.log("ten");
        break;
    case 100:
        console.log("hundred");
        break;
    case 1000:
        console.log("thousand");
        break;
    case 10000:
        console.log("ten thousand");
        break;
    case 100000:
        console.log("lakh");
        break;
    case 1000000:
        console.log("ten lakh");
        break;    
}