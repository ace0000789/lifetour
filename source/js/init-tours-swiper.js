import Swiper from './vendor/swiper';

function initToursSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-tours"]', {


    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
      1440: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 1,
      },

      0: {
        slidesPerView: 1,
      },
    },
  });
  return myImageSlider;
}
export {initToursSwiper};
