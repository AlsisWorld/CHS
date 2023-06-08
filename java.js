window.onload = function(){
  document.body.style.transitionDuration = "0s"
  var element2 = document.getElementById("header");
  element2.classList.toggle("longHeader");
  var element = document.getElementById("footer");
  element.classList.toggle("hide1");
  element.style.transitionProperty = "none"
  element2.style.height = " 100px"
  console.log(element2.style.height)
}
setTimeout(() => {
  document.body.style.transitionDuration = "0.5s"
  document.getElementById("header").style.transitionDuration = "0.5s"

}, 100);
var menutext = document.getElementsByClassName("menutext")
var lists = document.getElementsByClassName("lists");

var onmenu = false
var hamburgerdebounce = false;

 for(let i = 0;i<menutext.length;i++){
  let el = menutext[i]
  el.style.opacity = 0
  el.style.display = "contents"
  el.style.color = "rgba(255,255,255,0)"
  el.style.display = "none"
  el.style.transitionDuration = "0.3s"
  el.style.transitionProperty = "all"
 
 }

var checkbox = document.getElementById("Darkmode")
var darkmode = false
if(localStorage.getItem('darkmode') == 'true') {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
} else {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
}
function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
} 

function lightMode() {
  var element = document.body;
  
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
}

async function displayNone() {
  await sleep(300);
  el.style.display = none;
}

checkbox.addEventListener("change",function(d){
  if(darkmode){
    lightMode()
    localStorage.setItem('darkmode', 'false') 
    darkmode = false
  }else{
    darkMode()
    localStorage.setItem('darkmode', 'true')
    darkmode = true
  }
})

function Display(boolean){
  if(!hamburgerdebounce){
    hamburgerdebounce = true
    if(boolean){
      for(let i = 0;i<menutext.length;i++){
        console.log(menutext[i])
        let el = menutext[i]
        el.style.opacity = 1
        setTimeout(function(){
          el.style.transitionDuration = "0.3s"
        el.style.transitionProperty = "all"
        el.style.color = "rgba(255,255,255,1)"
        setTimeout(function(){
          hamburgerdebounce = false
        },300)
      
        },300)
        setTimeout(function(){
          
        el.style.display = "contents"
        },200)
       }
    }
    else{
      for(let i = 0;i<menutext.length;i++){
        let el = menutext[i]
        el.style.opacity = 0
        el.style.transitionDuration = "0.3s"
        el.style.transitionProperty = "all"
        el.style.color = "rgba(255,255,255,0)"
        el.style.display = "contents"   
        setTimeout(function(){
        el.style.display = "none"
        }, 300);

        setTimeout(function(){
          hamburgerdebounce = false
        },300)
       }
    }
  }
}
function show() {

  if (!hamburgerdebounce){
    
  var element = document.getElementById("hamburgerInput");
  element.classList.toggle("open");
  var element2 = document.getElementById("header");
  element2.classList.toggle("longHeader");
  //100px !important
  
  onmenu = !onmenu
  console.log(onmenu)
  if(onmenu){
    
    element2.style.height = "200px"

  }else{
    element2.style.height = "100px"

  }
  Display(onmenu)
  }
}
document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
      e.target.classList.add('fadeOut');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
      e.target.classList.remove('fadeOut');
   }
});

function ok() {
  sessionStorage.setItem('hideFooter', 'true') 
  var element = document.getElementById("footer");
  element.classList.toggle("hide1");
}

if(sessionStorage.getItem('hideFooter') == 'true') {
  var element = document.getElementById("footer");
  element.classList.toggle("hide1");
}
//tagen direkt från min förra sida men jag tycker den fungerar bättre här
function FunctionSearch() {
  //Bestämmer alla variabler.
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('Input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("UL");
  li = ul.getElementsByTagName('li');

  //Kollar genom listan och gömmer det man inte sökt på.
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function scrollDown() {
  document.getElementById('articles').scrollIntoView();
}

function validateForm() {
  let x = document.forms["form"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else {
    let x = document.forms["form"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    else {
      var txtName = document.getElementById("name");
      var lblName = document.getElementById("thankname");
      lblName.innerHTML = "Thank you " + txtName.value + " for contacting us! We will get back to you as soon as we can.";
      var send = document.getElementById("send");
      send.style.display = "none";
    }
  }
} 