let a=document.getElementById("text");
console.log(a.innerText);
let tagName=document.getElementsByTagName("h1");
console.log(tagName[0]);
let tagclass=document.getElementsByClassName("box");
console.log(tagclass[0]);
document.getElementById("header").innerText="Hello World";

function abc(){
    document.getElementById("card").style.flexDirection = "column";
}
document.getElementById("heading").style.color="red";

function btn(){
    document.getElementById("content").innerText="Welcomw To Elevation Academy"
}
function displayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var Session=document.getElementById("Session");
    if(hrs>=12){
        Session.innerHTML="PM";
    }
        else{
            Session.innerHTML="AM";
        }
        if(hrs>12){
            hrs=hrs-12;
        }
    document.getElementById("Hours").innerHTML=hrs;
    document.getElementById("Minutes").innerHTML=min;
    document.getElementById("Seconds").innerHTML=sec;
}
setInterval(displayTime,10);

const selectValue = () => {
    document.getElementById("temp").innerText =
      document.getElementById("choose").value;
  };