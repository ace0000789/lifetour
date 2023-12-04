import Swiper from './vendor/swiper';

function initReviewSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-review"]', {

    navigation: {
      nextEl: '[data-validate="review-button-next"]',
      prevEl: '[data-validate="review-button-prev"]',
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
        slidesPerView: 1.61,
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
        spaceBetween: 120,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        watchSlidesProgress: true,
      },

      0: {
        slidesPerView: 1,
        initialSlide: 1,
        watchSlidesProgress: true,
      },
    },
  });
  return myImageSlider;
}
export {initReviewSwiper};
