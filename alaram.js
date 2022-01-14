var dis = document.querySelector("h1");
var hp = document.querySelector("input");

function time(){
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var c = dis.innerText=(h + ":" + m + ":" + s);
  if( hp.value == c){
alert("alaram is ringing");
 }
}



 setInterval(time,1000);
/*
window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
}*/
