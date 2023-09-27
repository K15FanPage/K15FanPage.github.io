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

//gallery
let images = document.getElementsByClassName("image");
let displayImages = document.getElementsByClassName("displayImg");
const images_length = images.length;
displayImages[0].style.display = "block";

let latestX = 0;

function displayImg(x) {
  for (let i = 0; i < images_length; i++) {
    if (i == x) {
      displayImages[x].style.animation = "fade .7s";
      displayImages[x].style.display = "block";
      document.location.href = "#display";
      latestX = x;
    }
    else {
      displayImages[i].style.display = "none";
    }
  }
}

function showRight() {
  let x = latestX;
  x++;

  if(x >= images_length) {
    x = 0;
  }

  console.log(x);
  displayImg(x);

  latestX = x;
}

function showLeft() {
  let x = latestX;
  x--;

  if(x < 0) {
    x = images_length-1;
  }

  console.log(x);
  displayImg(x);

  latestX = x;
}