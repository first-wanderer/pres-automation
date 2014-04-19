//TODO: write Shower plugin
//TODO: turn off video for mobile, or make a fallback
//TODO: add play controls and shortcuts

var startVideo = function(){
    if( $('.slide.active video').length !== 0) {
        $('.slide.active video')[0].play();
    } else {
        $('video').each(function(){
            this.pause();
        });
    }
};

//First start
setTimeout(function(){
    startVideo();
}, 1);

//Listen navigation
window.addEventListener('popstate', function(event) {
    //listening after DOM change
    setTimeout(function(){
        startVideo();
    }, 1);
});