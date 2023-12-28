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

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
