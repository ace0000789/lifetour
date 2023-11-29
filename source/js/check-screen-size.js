let header = document.querySelector('[data-validate="header"]');
let wrapper = document.querySelector('[data-validate="wrapper"]');

export function checkScreenSize() {
  function handleResize() {
    if (window.innerWidth > 1199) {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      wrapper.classList.remove('is-bg');
    }
  }

  window.addEventListener('resize', handleResize);

  handleResize();
}
