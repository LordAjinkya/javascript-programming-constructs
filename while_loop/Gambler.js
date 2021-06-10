let money = 100;
let betCount = 0;
let winCount = 0;
while(money <= 200 || money == 0)
{
    let checkWin = Math.floor(Math.random()*2);
    if(checkWin == 1)
    {
        money++;
        winCount++;
    }
    else
    {
        money--;
    }
    betCount++;
}
if(money == 200)
{
    console.log("gambler wins");
}
else
{
    console.log("gambler losses");
}
console.log("no of bets gambler played is "+betCount);
console.log("no of bets gambler wins is "+winCount);