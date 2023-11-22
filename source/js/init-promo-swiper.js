// СЛАЙДЕР Жюри
import Swiper from './vendor/swiper';

function initPromoSwiper() {
  const myImageSlider = new Swiper('[data-validate="swiper-container"]', {

  });
  return myImageSlider;
}
export {initPromoSwiper};
