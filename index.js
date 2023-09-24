//play sound script 
function playSound(x) {
  let sound = document.getElementsByTagName("audio");
  for (let i = 0; i < sound.length; i++) {
    if (x - 1 == i) {
      sound[i].volume = "0.2";
      sound[i].play();
    } else {
      sound[i].pause();
    }
  }
}

openNavBtn = document.getElementById("openNav");
closeNavBtn = document.getElementById("closeNav");
navUl = document.getElementById("nav-ul");

//burger-haus
function openNav() {
  openNavBtn.style.display = "none";
  navUl.style.animation = "slide-left .5s";
  navUl.style.display = "block";
  closeNavBtn.style.display = "block";
}

function closeNav() {
  openNavBtn.style.display = "block"
  navUl.style.animation = "fade-out .2s";
  setTimeout(() => {
    navUl.style.display = "none";
  }, 200);
  closeNavBtn.style.display = "none";
}