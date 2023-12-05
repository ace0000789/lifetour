export const controlLastELementFeatures = () => {

  const featuresItems = document.querySelectorAll('.features .swiper-slide');
  const isOdd = featuresItems.length % 2 !== 0;
  if (isOdd) {
    const lastElement = featuresItems[featuresItems.length - 1];
    lastElement.classList.add('center-last');
  }
};

