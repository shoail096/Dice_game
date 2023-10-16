var randomnum;
randomnum=Math.random();
randomnum=randomnum*6;
randomnum=Math.floor(randomnum)+1;
var randomnum2;
randomnum2=Math.random();
randomnum2=randomnum2*6;
randomnum2=Math.floor(randomnum2)+1;


document.querySelector(".img1").setAttribute("src","images/dice"+randomnum+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomnum2+".png");

if(randomnum===randomnum2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomnum>=randomnum2)
{
    document.querySelector("h1").innerHTML="Person 1 Wins";
}
else if(randomnum<=randomnum2)
{
    document.querySelector("h1").innerHTML="Person 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Refresh ME";
}