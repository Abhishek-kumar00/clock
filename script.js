let degree=6;
let hour=0;
let minute=0;
let second=0;
let date;
let secondHand=document.getElementById('sec');
let minuteHand=document.getElementById('min');
let hourHand=document.getElementById('hour');
setInterval(()=>{
  date = new Date();
  second=date.getSeconds()*degree + 180;
  secondHand.style.transform=`rotate(${second}deg)`;
  minute=date.getMinutes()*degree +180;
  minuteHand.style.transform=`rotate(${minute}deg)`;
  hour=date.getHours()*30 + date.getMinutes()/12 +180;
  hourHand.style.transform=`rotate(${hour}deg)`;
},1000)
function changeColor(e){
  var color=e.value;
  document.getElementsByTagName('body')[0].style.backgroundColor=color;
 // e.style.backgroundColor=color;
 if(e.value=="#fae8ff"){
  document.getElementById('written').style.color = "black";


 }

}
let YourName = window.prompt("What's your name? ");
document.getElementById("title").innerHTML = "Hello, " + YourName + " have a good day &#128512;";
document.getElementById("title").style.animation = "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";