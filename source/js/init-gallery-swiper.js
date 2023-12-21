import Swiper from './vendor/swiper';

function initGallerySwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-gallery"]', {

    navigation: {
      nextEl: '[data-validate="gallery-button-next"]',
      prevEl: '[data-validate="gallery-button-prev"]',
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
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
        spaceBetween: 5,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 5,
      },

      0: {
        slidesPerView: 1,
      },
    },
  });
  return myImageSlider;
}
export {initGallerySwiper};
