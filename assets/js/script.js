// ------ Album Of The Week ------->
const albumSwiper = new Swiper("[albumSwiper]", {
    slidesPerView: 5,
    spaceBetween: 32,

    navigation: {
        nextEl: ".prev-next .next",
        prevEl: ".prev-next .prev"
    }
});

// ------ Music Playing ------->
const music = document.querySelector('audio');
const musicStatus = document.querySelector('[musicStatus]');
const progress = document.querySelector('#progress');

musicStatus.addEventListener('click', () => {
    if (musicStatus.classList.contains('fa-play')) {
        musicStatus.classList.replace('fa-play', 'fa-pause');
        music.play();
    }
    else {
        musicStatus.classList.replace('fa-pause', 'fa-play');
        music.pause();
        console.log(music.duration);
    }
});

if (music.play()) {
    setInterval(() => {
        progress.value = music.currentTime;
    }, 1000);
}

progress.addEventListener('change', () => {
    music.play();
    music.currentTime = progress.value;
    if (musicStatus.classList.contains('fa-play')) {
        musicStatus.classList.replace('fa-play', 'fa-pause');
    }
});

music.onloadedmetadata = function(){
    progress.max = music.duration
    progress.value = music.currentTime
}