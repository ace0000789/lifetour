import Swiper from './vendor/swiper';

function initFeaturesSwiper() {
  let swiper = null;

  function init() {
    swiper = new Swiper('[data-validate="swiper-features"]', {
      // общие опции

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
        // брейкпойнты

        1200: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          centeredSlides: true,
          allowTouchMove: true,
          spaceBetween: 30,
          watchSlidesProgress: true,
          initialSlide: 3,
        },
      },
    });
  }

  init();

  function handleResize() {
    if (window.innerWidth < 1200) {
      swiper.destroy(true, true);
      swiper = null;
    } else if (!swiper) {
      init();
    }
  }

  window.addEventListener('resize', handleResize);

}

export {initFeaturesSwiper};
