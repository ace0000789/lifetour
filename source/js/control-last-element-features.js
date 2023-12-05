export function controlLastELementFeatures() {

  document.addEventListener('DOMContentLoaded', function () {
    const featuresItems = document.querySelectorAll('data-validate="swiper-features" .swiper-slide');
    const isOdd = featuresItems.length % 2 !== 0;

    if (isOdd) {
      const lastElement = featuresItems[featuresItems.length - 1];
      lastElement.classList.add('center-last');
    }
  });
}


/**/
