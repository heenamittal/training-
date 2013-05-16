/**
 * Created with JetBrains WebStorm.
 * User: nehal
 * Date: 5/14/13
 * Time: 10:18 AM
 * To change this template use File | Settings | File Templates.
 */

console.log("in here");

//
//var c=document.getElementById("mycanvas");
//var ctx= c.getContext("2d");
//ctx.fillStyle="red";
////ctx.fillRect(5,6,75,180);
////ctx.moveTo(0,0);
////ctx.lineTo(500,200);
////ctx.beginPath();
//ctx.arc(66,55,30,20,2*Math.PI)
//ctx.stroke();
//ctx.font="30px arial";
//ctx.fillText("canvas",190,70);
//
////var c=document.getElementById("mycanvas");
////var ctx= c.getContext("2d");
//
////        var grd=ctx.createRadialGradient(0,0,300,20);
////        grd.addColorStop(0,"red");
////        grd.addColorStop(1,"white");
////        ctx.fillStyle=grd;
//ctx.fillRect(10,10,150,80);



var drawCanvas = function() {
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    context.fillStyle = "red";
     context.fillRect(0,0,100,20);
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(450, 50);
    context.stroke();
}

document.write("welcome");
document.write("<h1>This is a heading</h1>");
document.write("<p1> paragraph </p1>");


 function myFunction()
 {
 console.log('enter here');
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>") ;



 };
myFunction();

function newFunction()
{
    console.log('enter here');
    document.getElementById("demo").innerHTML="javascript paragraph";
    document.getElementById("mydiv").innerHTML="JavaScript Function";
};
newFunction();

var x=5;
var y=7;
var z=x+y;
document.write(z + "<br>");
var pi=3.14;
var name="anyone";
document.write(pi + "<br>");
document.write(name + "<br>");
var carname;
carname="audi";
document.getElementById("cardemo").innerHTML=carname ;
  var a=10;
var a="any";
var a="one";
document.write(a + "<br>");
var i;
var prg=new Array("1","2","3");
for(i=0; i<prg.length; i++ )
document.write(prg[i] +"<br>");
var pr= {
    fname : "first",
    lname : "last" ,
    id    : 1
};
document.write(pr.fname +"<br>");
document.write(pr["lname"] +"<br>");
pr=new Object();
pr.fname="fname";
pr.lname="lname";
pr.age="20";
pr.eyecolor="black";
document.write(pr.fname + pr.lname + " is " + pr.age +" yr old <br>" );
var m="new message";
var n= m.length;
var l= m.toUpperCase();
document.write(n + l +"<br>");
var s=m.replace("new", "old");
document.write(s +"<br>");
var d=m.search("ess");
document.write(d +"<br>");
var name="harry";
var job="work";

 function argFunction(name,job)
 {
     document.write("welcome " +name +" the " +job);
 }
function addFunction(a,b)
{     a=6;
    b=10;
    var w;
    if(a>b)
    w="greater";
    else
    w="smaller";
    document.write(w + "<br> " );
    return a%b;
}
var myvar=addFunction();
document.write("sum= " + myvar);
var txt1="java";
var txt2="script";
var num=33;
txt3=txt1+txt2;
txt4=txt2 + num;
document.write("sum=" + txt3 + "<br>");
document.write("sum= " +txt4 + "<br>");

var day=new Date().getDay();
switch (day)
{
    case 6:
        tday="Today it's Saturday";
        break;
    case 0:
        tday="Today it's Sunday";
        break;
    default:
        tday="Looking forward to the Weekend";
}
document.write(tday + "<br> " );

    var x=new Array("1","2","3","4","5","6");
var i;
for(i=0;i<10;i++)
  {
if(i==5)
    {
    break;
      }
if(i==2)
{
    continue;
}

document.write(x[i] + "<br> ");

  }
        function errFunction()
        {
            try
            {
            addlert("welcome");
            }
            catch(err)
            {
                txt="error reported \n";
                txt+="description : " + err.message + "\n\n";
                txt+="click ok to continue";
                alert(txt);


            }
        }


function validateFunction()
{
    var x=document.forms["myForm"]["fname"].value;
    if (x==null || x=="")
    {
        alert("First name must be filled out");
        return false;
    }
}

document.write(Date()+ "<br> ");
// document.getElementById("p1").innerHTML="bye" ;
document.getElementById("p1").style.color="blue" ;
function person (fname,lname)
{
    this.fname=fname;
    this.lname=lname;
document.write("\n in function person \n");
    this.changeName=changeName;
}
function changeName(name)
{
    this.lname=name;
}
    tperson=new person("jo", "doe");
tperson.changeName("lee");
document.write(tperson.fname + " " + tperson.lname);
var tnum;
document.write("<p>17 digits");
tnum=12345678987654321;
document.write(x+ "</p>");
//document.write("<p>0.2 + 0.1 = ");
//x=0.2+0.1;
//document.write(x + "</p>");
var str="hello, dis is html java script \n";
var n=str.lastIndexOf("java");
document.write(n+ "<br> ");
document.write(str.match("tm")+ "<br> ");
document.write(str.match("and")+ "<br> ");
var txtr=str.replace("html", "the");
document.write(txtr+ "<br> ");
var spl=str.split(",");
document.write(spl+ "<br> ");
var er="i hav a \"bag\" in brown color <br> ";
document.write(er+ "\n ");
var sqr=Math.sqrt(16);
document.write(sqr+ "<br> ");
var maxi=Math.max(6,8);
document.write(maxi+ "<br> ");
var rndm=Math.random();

document.write(Math.floor(Math.random()*5)+ "<br> ");
var pat1=/JAVA/i;
document.write(str.match(pat1) + "<br> ");
var pat2=new RegExp("a");
document.write(pat2.test("there is a program"));
var pat2=new RegExp("a");
document.write("<br> ")
document.write(pat2.exec("there is a program"));
var w=window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var h=window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
document.write("height:" + h + " width: " + w);
document.write("available width: " + screen.availWidth);
document.write(location.href + "<br>");
document.write(location.pathname);
function goBack()
{
    windows.history.back()
}
txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt+= "<p>Browser Name: " + navigator.appName + "</p>";
txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt+= "<p>Platform: " + navigator.platform + "</p>";
txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";

document.write(txt);
// alert("alert");
//window.confirm("confirmed");
// window.prompt("enter","yes");


























