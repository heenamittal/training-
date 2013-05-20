console.log("in here");

function clock()
{
    var now=new Date();
    var c=document.getElementById("aCanvas").getContext('2d');
        c.save();
    c.clearRect(0,0,150,150);
    c.translate(95,95);
    c.scale(0.4,0.4);
    c.rotate(-Math.PI/2);
    c.strokeStyle="black";

    c.lineWidth=8;
    c.lineCap="round";
    c.save();
for(var i=0;i<12;i++)
{
    c.beginPath();
    c.rotate(Math.PI/6);
    c.moveTo(100,0);
    c.lineTo(120,0);
    c.stroke();
}
c.restore();

  c.save();
    c.lineWidth=5;
    for(var i=0;i<60;i++)
    {
        if(i%5!==0)
        {
        c.beginPath();
             c.moveTo(117,0);
        c.lineTo(120,0);
        c.stroke();
        }
        c.rotate(Math.PI/30);
    }
    c.restore();
var sec=now.getSeconds();
var min=now.getMinutes();
var hr=now.getHours();
    hr=checkHr(hr);
    c.fillStyle="black";
c.save();
c.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec) ;
    c.strokeStyle="blue";
    c.lineWidth = 14;

c.beginPath();
c.moveTo(-20,0);
c.lineTo(80,0);
c.stroke();
c.restore();
    c.save();
    c.rotate((Math.PI/30)*min + (Math.PI/1800)*sec);
    c.strokeStyle="blue";
    c.lineWidth=10;
    c.beginPath();
    c.moveTo(-28,0);
    c.lineTo(112,0);
    c.stroke();
    c.restore();
    c.save();
    c.rotate((Math.PI/30)*sec);
    c.strokeStyle="black";
    c.filStyle="blue";
    c.lineWidth=6;
    c.beginPath();
    c.moveTo(-30,0);
    c.lineTo(83,0);
    c.stroke();

    c.beginPath();
    c.arc(0,0,10,0,Math.PI*2,true);
    c.fill();

    c.beginPath();
    c.arc(95,0,10,0,Math.PI*2,true);
    c.stroke();

    c.arc(0,0,3,0,Math.PI*2,true);
    c.fill();

    c.fillStyle="blue";
    c.fill();
    c.restore();
    c.beginPath();
    c.lineWidth=14;
    c.strokeStyle="black";
    c.arc(0,0,142,0,Math.PI*2,true);
    c.stroke();
    c.restore();
}
clock();
function checkHr(h)
{

    if(h>12)
    {
                h=h-"12";

    }
return h;
}
