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

  if (x >= images_length) {
    x = 0;
  }

  console.log(x);
  displayImg(x);

  latestX = x;
}

function showLeft() {
  let x = latestX;
  x--;

  if (x < 0) {
    x = images_length - 1;
  }

  console.log(x);
  displayImg(x);

  latestX = x;
}

function watchVideo(vid) {
  let videoLink = [
    'https://youtu.be/hpQmR39-ZWQ?t=4',
    'https://youtu.be/gJgDXBJ1LHE?t=53',
    'https://youtu.be/NosIDDkv2Ls?t=388',
    'https://youtu.be/jVyPKabgCQw?t=248',
    'https://youtu.be/3NXzcZgJmSQ?t=77',
    'https://youtu.be/NosIDDkv2Ls?t=162',
    'https://youtu.be/Tp1mnQ12Hz8?t=347',
    'https://youtu.be/OnZWBggRHw0?t=5',
    'https://youtu.be/S318tIL4FA0?t=217',
    'https://youtu.be/bBK-CdG3bq4?t=19',
    'https://youtu.be/bBK-CdG3bq4?t=187',
    'https://youtu.be/OnZWBggRHw0?t=65',
    'https://youtu.be/NosIDDkv2Ls?t=299',
    'https://youtu.be/hpQmR39-ZWQ?t=102',
    'https://youtu.be/2PP7Le_3v74?t=70',
    'https://youtu.be/NosIDDkv2Ls?t=43',
    'https://youtu.be/RmAGSL3r-y0'
  ]

  let vidLeng = videoLink.length;
  
  if(vid > -1) {
    if (confirm("Do you want to watch the video?")) {
      window.location.href = videoLink[vid];
    }
  }
}

function sendFA() {
  window.location.href="http://prati-fanart.infinityfreeapp.com";
}