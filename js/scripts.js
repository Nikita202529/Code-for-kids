// Инициализация Swiper для мобильной версии
const heroSwiper = new Swiper('.hero-section__slider .swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000, // Интервал смены слайдов
        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true, // Курсор в виде "руки"
    effect: 'slide', // Простой слайд
    speed: 500, // Скорость перехода
    breakpoints: {
        320: {
            slidesPerView: 1, // Один слайд на экране
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1, // Один слайд на экране
            spaceBetween: 20,
        },
    },
});