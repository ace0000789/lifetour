export const controlLastELementFeatures = () => {

  function checkLastElement() {
    const featuresItems = document.querySelectorAll('.features .swiper-slide');

    if (!featuresItems) {
      return;
    }

    const isOdd = featuresItems.length % 2 !== 0;
    if (isOdd) {
      const lastElement = featuresItems[featuresItems.length - 1];
      lastElement.classList.add('center-last');
    }
  }

  checkLastElement();

  window.addEventListener('resize', () => {
    checkLastElement();
  });

};
