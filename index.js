function playSound(x) {
    let sound = document.getElementsByTagName("audio");
    for(let i=0; i<sound.length; i++) {
        if(x-1==i) {
            sound[i].play();
            sound[i].volume = "0.2";
        }

        else {
            sound[i].pause();
        }
    }
}