import Swiper from './vendor/swiper';

function initToursSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-tours"]', {

    navigation: {
      nextEl: '[data-validate="tours-button-next"]',
      prevEl: '[data-validate="tours-button-prev"]',
    },

    // перетаскивание на ПК
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,

    // Управление клавиатурой
    keyboard: {
      // вкл/выкл
      enbled: true,
      // вкл/выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
    },

    // Автовысота картинки
    autoHeight: true,
    // Бесконечный слайдер
    loop: false,
    // Количнство дублирущих слайдов
    loopedSlides: 0,
    // Свободный режим (перетаскивание по 1 фрагменту)
    freeMod: true,
    // Скорость переклдючения слайда
    speed: 500,
    // Листание
    effect: 'slide',
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      0: {
        slidesPerView: 1,
      },
    },
  });
  return myImageSlider;
}
export {initToursSwiper};
