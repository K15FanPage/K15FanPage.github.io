function randomVideo() {
    let videos = [
        '2PP7Le_3v74?si=2ShDXAsgmnlw3oPK',
        'JYntmqcEYoA?si=j6ko4zS2sTJIBFOH',
        'Sf_iAdMLV7g?si=GRS3khu3GqFOx844',
        '3NXzcZgJmSQ?si=q56BMNA6EepwPd_R',
        'OnZWBggRHw0?si=JUIZ1c7xvX9Mxh-c',
        'NosIDDkv2Ls?si=_8G9xDcmn27B0xNq',
        'hpQmR39-ZWQ?si=gqc8GTflDGV3RHPe',
        'bBK-CdG3bq4',
        '_MytdxgCZCM',
        'SQRvaDMLxMw',
        '3J_Dnt9OZFs',
        'xU_OImeuMJ0',
        'SRiOlOGCx_A',
        'YS2WRZCnLIQ',
        'vg-bHWgarXY'
    ];

    let videoIndex = Math.floor(Math.random() * videos.length);

    let html = '<div id="videoPlayer"><iframe width="720" height="480" src="https://www.youtube.com/embed/' + videos[videoIndex] + '?autoplay=0" frameborder="0" allowfullscreen></iframe></div>';
    //document.write(html);
    document.getElementById("random-vid-container").innerHTML = html;
}

randomVideo();