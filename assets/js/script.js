// ------ Album Of The Week ------->
const albumSwiper = new Swiper("[albumSwiper]", {
    slidesPerView: 5,
    spaceBetween: 32,

    navigation: {
        nextEl: ".prev-next .next",
        prevEl: ".prev-next .prev"
    }
});
