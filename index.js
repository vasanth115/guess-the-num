const btn=document.getElementById("btn");
var result=Math.floor(Math.random()*10);
var times=0;
var array=[];
const span=document.getElementById("times");

if(result>0)
{
    btn.addEventListener("click",play);

 function play()
{
    const input=document.getElementById("input").value;
    const msg1=document.getElementById("msg1");
    const msg2=document.getElementById("msg2");
    const msg3=document.getElementById("msg3");

    if(input<1||input>10)
    {
        alert("please enter the number from 1-10");
        times++;
        span.innerHTML=times;
    }
    else
    {
        times++;
        array.push(input);
        if(input>result)
        {
            msg1.innerHTML="YOUR INPUT IS TOO HIGH";
            span.innerHTML=times;
            msg3.innerHTML=array;
        }
        else if(input<result)
        {
        msg1.innerHTML="YOUR INPUT IS TOO LOW";
        span.innerHTML=times;
        msg3.innerHTML=array;
        }
        else if(input==result)
        {
        msg1.innerHTML="YOU MADE IT";
        span.innerHTML=times;
        msg3.innerHTML=array;
        var again=document.getElementById("again");
        again.style.display="block";

        again.addEventListener("click",playagain);
       }
    }
}

function playagain()
{
    location.reload();
}
}
else
{
    location.reload();
}