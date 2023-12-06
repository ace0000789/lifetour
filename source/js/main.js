import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initMobileMunu} from './init-mobile-menu';
import {checkScreenSize} from './check-screen-size';
import {closeMenuAfterClick} from './close-menu-after-click';
import {initPromoSwiper} from './init-promo-swiper';
import {initVideo} from './init-video';
import {initToursSwiper} from './init-tours-swiper';
import {initStudySwiper} from './init-study-swiper';
import {initReviewSwiper} from './init-review-swiper';
import {initFeaturesSwiper} from './init-features-slider';
import {controlLastELementFeatures} from './control-last-element-features';
import {initGallerySwiper} from './init-gallery-swiper';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  initMobileMunu();
  checkScreenSize();
  closeMenuAfterClick();
  initPromoSwiper();
  initVideo();
  initToursSwiper();
  initStudySwiper();
  initReviewSwiper();
  initFeaturesSwiper();
  controlLastELementFeatures();
  initGallerySwiper();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
