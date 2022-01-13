var dis = document.querySelector("h1");
function time(){
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  dis.innerText=(h + ":" + m + ":" + s);

}


/*
 setInterval(time,1000);

window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
}*/
