let flip = 11;
let num = 1;
let headCount = 0;
let tailCount = 0;
while(num <= 11)
{
    let flipCheck = Math.floor(Math.random()*2);
    if(flipCheck == 1)
    {
    headCount++;
    }
    else
    {
    tailCount++;
    }
    num++;
}
if(headCount > tailCount)
console.log("head wins");
else
console.log("tail wins");