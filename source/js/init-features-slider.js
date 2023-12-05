import Swiper from './vendor/swiper';

function initFeaturesSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-features"]', {

    navigation: {
      nextEl: '[data-validate="features-button-next"]',
      prevEl: '[data-validate="features-button-prev"]',
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
    autoHeight: false,
    // Бесконечный слайдер
    loop: true,
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
        slidesPerView: 3.58,
        slidesPerGroup: 1,
        centeredSlides: true,
        allowTouchMove: true,
        spaceBetween: 30,
        watchSlidesProgress: true,
        initialSlide: 3,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        watchSlidesProgress: true,
      },

      0: {
        slidesPerView: 1,
        watchSlidesProgress: true,
        initialSlide: 2,
      },
    },
  });
  return myImageSlider;
}
export {initFeaturesSwiper};
