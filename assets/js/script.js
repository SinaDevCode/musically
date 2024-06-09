// ------ Album Of The Week ------->
const albumSwiper = new Swiper("[albumSwiper]", {
    slidesPerView: 5,
    spaceBetween: 32,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".prev-next .next",
        prevEl: ".prev-next .prev",
    },
});

// ------ Liked ------->
const heart = document.querySelector("[heart]");
heart.addEventListener("click", () => {
    if (heart.getAttribute("src") === "./assets/src/svgs/empty-heart.svg") {
        heart.setAttribute("src", "./assets/src/svgs/fill-heart.svg");
    } else {
        heart.setAttribute("src", "./assets/src/svgs/empty-heart.svg");
    }
});

// ------ Music Playing ------->
const music = document.querySelector("audio");
const musicStatus = document.querySelector("[musicStatus]");
const progress = document.querySelector("#progress");
const startingTime = document.querySelector(".current-time");
const fullTime = document.querySelector(".full-time");

musicStatus.addEventListener("click", () => {
    if (musicStatus.classList.contains("fa-play")) {
        musicStatus.classList.replace("fa-play", "fa-pause");
        music.play();

        progress.setAttribute("max", music.duration);

        let currentMinutes = Math.floor(music.currentTime / 60);
        let currentSeconds = Math.floor(
            music.currentTime - currentMinutes * 60
        );
        let currentSecondsReadable =
            currentSeconds > 9 ? currentSeconds : `0${currentSeconds}`;
        startingTime.innerHTML = `${currentMinutes}:${currentSecondsReadable}`;

        let fullMinutes = Math.floor(music.duration / 60);
        let fullSeconds = Math.floor(music.duration - fullMinutes * 60);
        let fullSecondsReadable =
            fullSeconds > 9 ? fullSeconds : `0${fullSeconds}`;
        fullTime.innerHTML = `${fullMinutes}:${fullSecondsReadable}`;

        setInterval(() => {
            progress.value = music.currentTime;

            let currentMinutes = Math.floor(music.currentTime / 60);
            let currentSeconds = Math.floor(
                music.currentTime - currentMinutes * 60
            );
            let currentSecondsReadable =
                currentSeconds > 9 ? currentSeconds : `0${currentSeconds}`;
            startingTime.innerHTML = `${currentMinutes}:${currentSecondsReadable}`;

            if (startingTime.innerHTML === fullTime.innerHTML) {
                musicStatus.classList.replace("fa-pause", "fa-play");
            }
        }, 1000);
    } else {
        musicStatus.classList.replace("fa-pause", "fa-play");
        music.pause();
    }
});

progress.addEventListener("change", () => {
    music.play();
    music.currentTime = progress.value;
    currentTimeShow.innerHTML = Math.floor(music.currentTime);

    setInterval(() => {
        progress.value = music.currentTime;
    }, 1000);

    if (musicStatus.classList.contains("fa-play")) {
        musicStatus.classList.replace("fa-play", "fa-pause");
    }
});
