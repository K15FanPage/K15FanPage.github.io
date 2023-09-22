function randomVideo() {
    let videos = [
        '2PP7Le_3v74?si=2ShDXAsgmnlw3oPK',
        'JYntmqcEYoA?si=j6ko4zS2sTJIBFOH',
        'Sf_iAdMLV7g?si=GRS3khu3GqFOx844',
        '3NXzcZgJmSQ?si=q56BMNA6EepwPd_R',
        'OnZWBggRHw0?si=JUIZ1c7xvX9Mxh-c'
    ];

    let videoIndex = Math.floor(Math.random() * videos.length);
    console.log(videoIndex);

    let html = '<div id="videoPlayer"><iframe width="720" height="480"   src="http://www.youtube.com/embed/' + videos[videoIndex] + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
    document.write(html);
}
randomVideo();