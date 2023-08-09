function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Fhis6TGM9z":
        Script1();
        break;
      case "6ZQGm9U6ovc":
        Script2();
        break;
      case "6EX1kUbw7BR":
        Script3();
        break;
      case "6ijXr8t6I9D":
        Script4();
        break;
      case "6GNNhCGEFz9":
        Script5();
        break;
      case "6dwRYYk9bZP":
        Script6();
        break;
      case "6kxporUoZHU":
        Script7();
        break;
      case "6NNMVGODmoD":
        Script8();
        break;
      case "5a8YeuCqGGA":
        Script9();
        break;
      case "6gixHULl6Cq":
        Script10();
        break;
      case "5kA0Z5MDhLh":
        Script11();
        break;
      case "5nnXXPH9U9D":
        Script12();
        break;
      case "5k5WPubm0Ve":
        Script13();
        break;
      case "6BEN5Qw1jPl":
        Script14();
        break;
      case "5rDBreAXO3q":
        Script15();
        break;
      case "5lYfQ8ZnPP0":
        Script16();
        break;
      case "67TeB1nKPcM":
        Script17();
        break;
      case "65PRHyfpAR7":
        Script18();
        break;
      case "5WfmLEvOIMx":
        Script19();
        break;
      case "6Lu68rI6j1j":
        Script20();
        break;
      case "6qPzb9LplTT":
        Script21();
        break;
      case "6p7TOPMc2Du":
        Script22();
        break;
      case "5wkr19U01lm":
        Script23();
        break;
      case "6b03nHhKri5":
        Script24();
        break;
      case "6klCpt3CO5w":
        Script25();
        break;
      case "63MTpYhvpBu":
        Script26();
        break;
      case "5zlElRT3wfo":
        Script27();
        break;
      case "5iTai3fIhA0":
        Script28();
        break;
      case "67A1r6Q59Sf":
        Script29();
        break;
      case "5aNPkb1xBYx":
        Script30();
        break;
      case "6PannjpzIsW":
        Script31();
        break;
      case "6YstwiR7Pyi":
        Script32();
        break;
      case "5weMvFjJXss":
        Script33();
        break;
      case "5t152KD1Vnk":
        Script34();
        break;
      case "6KbtMM4ZKBX":
        Script35();
        break;
      case "6SbtOffCdlo":
        Script36();
        break;
      case "631h9mLNVbc":
        Script37();
        break;
      case "6QvRWQaucjQ":
        Script38();
        break;
      case "63TIm5bHK7n":
        Script39();
        break;
  }
}

function Script1()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
  
    setTimer=setInterval(function () {
      
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
      
        
   
    }, 1000);
      
}



 startTimer(60*3.5);
}

function Script2()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}
else if(localStorage.getItem("status") =="wrong answer"){
	GetPlayer().SetVar('result',"Wrong Answer")
}

else {
GetPlayer().SetVar('result',"Not Answer")
}
localStorage.removeItem('status')
}

function Script3()
{
  clearInterval(setTime);
}

function Script4()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script5()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script6()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script7()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script8()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script9()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_1",minutes)
       GetPlayer().SetVar("sec_1",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script10()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_1',"Accepted")
}
else if(localStorage.getItem("status") =="wrong answer"){
	GetPlayer().SetVar('result_1',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_1',"Not Answer")
}
if(localStorage.getItem("status")=="accepted" && GetPlayer().GetVar('problemShowed')==false && GetPlayer().GetVar("sec_1") != 0){
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
localStorage.removeItem('status')
}
}

function Script11()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script12()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script13()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script14()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script15()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script16()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_2",minutes)
       GetPlayer().SetVar("sec_2",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script17()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_2',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)

}
else if(localStorage.getItem("status") =="wrong answer"){

GetPlayer().SetVar('result_2',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_2',"Not Answer")
}

localStorage.removeItem('status')
}

function Script18()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script19()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script20()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script21()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script22()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_3",minutes)
       GetPlayer().SetVar("sec_3",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script23()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_3',localStorage.getItem("status"))
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}
else if(localStorage.getItem("status") =="wrong answer"){

GetPlayer().SetVar('result_3',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_3',"Not Answer")
}

localStorage.removeItem('status')
}

function Script24()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script25()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script26()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script27()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script28()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_4",minutes)
       GetPlayer().SetVar("sec_4",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script29()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_4',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}else if(localStorage.getItem("status") =="wrong answer"){
GetPlayer().SetVar('result_4',"Wrong Answer")

}



else {
GetPlayer().SetVar('result_4',"Not Answer")
}



localStorage.removeItem('status')
}

function Script30()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script31()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script32()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script33()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script34()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script35()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script36()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script37()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

function Script38()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.pause();
});
}

function Script39()
{
  document.querySelectorAll('audio, video').forEach(item => {
  item.muted = false;
  item.play();
});
}

