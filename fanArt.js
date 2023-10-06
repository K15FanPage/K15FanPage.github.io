let art = document.getElementsByClassName("fan-art-image"); //all the images in fan-art
let artLen = art.length;
let imagesRow = 1; //which row is display

showGalleryImages(imagesRow);

function showGalleryImages(imagesRow) {

    let showRow = imagesRow * 3;
    for(let i=1; i<=artLen; i++) {
        if(showRow == i) {
            art[i-1].style.display = "block";
            art[i-1].style.animation = "fade 1s";
            art[i-2].style.display = "block";
            art[i-2].style.animation = "fade 1s";
            art[i-3].style.display = "block";
            art[i-3].style.animation = "fade 1s";
        }

        else {
            art[i-1].style.display = "none";
        }
    }
}

function goLeft() {
    if(imagesRow > 1) {
        imagesRow--;
    }
    
    else {
        imagesRow = artLen/3;
    }

    showGalleryImages(imagesRow);
    console.log(imagesRow);
}

function goRight() {
    if(imagesRow < artLen/3) {
        imagesRow++;
    }
    
    else {
        imagesRow = 1;
    }

    showGalleryImages(imagesRow);
    console.log(imagesRow);
}